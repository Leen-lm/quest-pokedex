import { getPokemonData } from "./getPokemonData";

export async function getPokemonUrls (limit) {
    const data = await getPokemonData (limit)
    const urls = []
    for (let i = 0; i < limit; i++){
        urls[i] = data[i].url
    }
    
    return urls
}