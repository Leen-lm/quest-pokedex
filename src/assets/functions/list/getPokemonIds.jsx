import { getPokemonUrls } from "./getPokemonUrls";

export async function getPokemonIds (limit){
    const urls = await getPokemonUrls(limit)
    const data = []
    const dataResponse = []
    const ids = []
    for (let i = 0; i < limit; i++){
        data[i] = await fetch(urls[i])
        dataResponse[i] = await data[i].json()
        ids[i] = dataResponse[i].id
    }
    
    return ids
}