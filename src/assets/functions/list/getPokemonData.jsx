export async function getPokemonData (limit){
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
    const response = await fetch(url)
    const data = await response.json()
    const pokemons = data.results
    
    return pokemons
}