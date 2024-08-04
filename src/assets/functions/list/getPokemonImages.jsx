import { getPokemonUrls } from "./getPokemonUrls.jsx"

export async function getPokemonImages (limit) {
    const urls = await getPokemonUrls(limit)
    const data = []
    const dataResponse = []
    const images = []
    for (let i = 0; i < limit; i++){
        data[i] = await fetch(urls[i])
        dataResponse[i] = await data[i].json()
        images[i] = dataResponse[i].sprites.front_default
    }

    return images
}
