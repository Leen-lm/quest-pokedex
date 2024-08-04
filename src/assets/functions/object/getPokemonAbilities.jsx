import { getPokemonInfo } from "./getPokemonInfo";
 
async function getAbilities (id) {
    const info = await getPokemonInfo(id)
    const abilitiesInfo = []

    info.abilities.forEach(ability => {
        abilitiesInfo.push(ability)
    })

    return abilitiesInfo
}

export async function fetchAbilities (id) {
    const data = await getAbilities(id)
    const abilities = []
    data.forEach(ability => {
        abilities.push(ability.ability.name)
    })
    
    return abilities
}

async function getDescriptions (id){
    const info = await getPokemonInfo(id)
    const abilities = info.abilities
    const descriptionData = []

    if (abilities && abilities.length > 0){
        for ( let i = 0; i < abilities.length; i++) {
            let abilityUrl = abilities[i].ability.url
            let response = await fetch(abilityUrl)
            let data = await response.json()
            descriptionData.push(data)
        }
    }

    return descriptionData
}

export async function fetchDescriptions (id) {
    const response = await getDescriptions(id)
    const descriptions = []
    const languages = []

    response.forEach(element => {
        const englishEntries = element.effect_entries.filter(entry => entry.language.name === 'en')

        if (englishEntries.length > 0){
            descriptions.push(englishEntries[0].effect)
            languages.push(englishEntries[0].language)
        }
    })

    return descriptions
}

