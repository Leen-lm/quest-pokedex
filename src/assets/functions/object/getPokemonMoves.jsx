import { getPokemonInfo } from "./getPokemonInfo";

async function getMoves (id) {
    const response = await getPokemonInfo(id)
    const data = response.moves
    const moves = []
    data.forEach( movesList => {
        moves.push(movesList.move)
    })

    return moves
}

export async function fetchMoves (id) {
    const data = await getMoves(id)
    const moves = []
    data.forEach( move => {
        moves.push(move.name)
    })
    return moves
}