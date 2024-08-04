import { getPokemonInfo } from "../functions/object/getPokemonInfo"
import { fetchMoves } from "../functions/object/getPokemonMoves"
import { fetchAbilities, fetchDescriptions } from "../functions/object/getPokemonAbilities"

export async function setPokemon (id) {
    const info = await getPokemonInfo(id)
    const movesNames = await fetchMoves(id)
    const abilitiesNames = await fetchAbilities(id)
    const abilitiesDescriptions = await fetchDescriptions(id)

    const pokemon = {
        name: info.name,
        id: info.id,
        image: info.sprites.front_default,
        type: info.types[0].type.name,
        moves: [],
        abilities: [],
    }

    function setMoves () {
        movesNames.forEach(() => {
            pokemon.moves = movesNames
        })
    }

    function setAbilities () {
        abilitiesNames.forEach((element, index) => {
            pokemon.abilities.push({
                ability: abilitiesNames[index],
                effect: abilitiesDescriptions[index]
            })
        })
    }

    setMoves()
    setAbilities()

    return pokemon
}
