import React from 'react'
import { useState, useEffect } from 'react'
import { getPokemonIds } from '../functions/list/getPokemonIds'
import { getPokemonNames } from '../functions/list/getPokemonNames'
import { getPokemonImages } from '../functions/list/getPokemonImages'
import { Link } from 'react-router-dom'
import { useTheme, themes } from '../../context/themeContext'


export function List() {
    const [pokemons, setPokemon] = useState([])
    const [itensShow, setItensShow] = useState(10)
    const { theme } = useTheme()

    useEffect(() => {
        async function fetchPokemonData(itensShow) {
            const names = await getPokemonNames(itensShow)
            const images = await getPokemonImages(itensShow)
            const ids = await getPokemonIds(itensShow)

            const combinedData = names.map((name, index) => (
                {
                    name,
                    image: images[index],
                    id: ids[index]
                }
            ))
            setPokemon(combinedData)
        }
        fetchPokemonData(itensShow)

    }, [itensShow])


    const loadMore = () => {
        setItensShow((itensShow) => itensShow + 10)
    }

    return (
        <div className="pokemon-list">
            <h2 className="title">Lista de pokemons</h2>
            <ul className="lista">
                {pokemons.map((pokemon, index) => (
                    <Link key={index} to={`/pokemon/${pokemon.id}`}><li key={index} className='item' id={theme === themes.light ? 'light-theme' : 'dark-theme'}>
                        <p className='name-pokemon'>{pokemon.name}</p>
                        <img className='imagem' src={pokemon.image} alt={pokemon.name} />
                    </li></Link>
                ))}
            </ul>
            <button className='botao-loadMore' onClick={() => {
                loadMore()
            }}>Carregar mais..</button>
        </div>
    )



}