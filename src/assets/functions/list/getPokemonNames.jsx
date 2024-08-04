import { getPokemonData } from "./getPokemonData";

export async function getPokemonNames (limit) {
    const data = await getPokemonData(limit)
    const names = []

    for (let i = 0; i < limit; i++){
        names[i] = data[i].name
    }

    return names
} 