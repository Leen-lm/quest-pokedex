import { useState, useEffect } from "react";
import { setPokemon } from "../../objects/pokemon";
import { useParams } from "react-router-dom";
import { useTheme, themes } from "../../../context/themeContext.jsx"
import './pokemonDetails.css'
import '../../../styles/responsive/pokemon-page.css'

export function PokemonDetails () {
    const { id } = useParams()
    const [pokemon, setPokemonData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [abilityIndex, setAbilityIndex] = useState(null)
    const {theme} = useTheme()
    
    const handleAbilityClick = (index) => {
        setAbilityIndex(prevIndex => {
            const newIndex = prevIndex === index ? null : index
            return newIndex
        })
    }

    useEffect( () => {
        async function fetchPokemonData () {
            setLoading(true)
            setPokemonData(null)

            try {
                const data = await setPokemon(id)
                setPokemonData(data)
            } catch (error) {
                console.log("Error fetching pokemon data:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchPokemonData()
    }, [id])

    if (loading) {
        return <div className="message">Loading...</div>
    }

    if (!pokemon) {
        return <div className="message">Error loading pokemon data...</div>
    }

    const abilities = pokemon.abilities
    const moves = pokemon.moves

    return (
        <>
            <section className="info" id={theme === themes.light ? 'light=theme' : 'dark-theme'}>
                <img className="image" src={pokemon.image} alt={pokemon.name}/>
                <div className="type-name">
                    <p className="name">{pokemon.name}</p>
                    <p className="type">type: {pokemon.type}</p>
                </div>
                </section>
                
                <div className="abilities">
                    <h2 className="title">Abilities</h2>
                    <ul className="list-abilities">
                        {
                            abilities.map((ability, i) => (
                                <li key={i} className = "ability-item">
                                    <h3 className="item-title" onClick={() => handleAbilityClick(i)}>
                                        {ability.ability} <i className="fas fa-arrow-down"></i>
                                        </h3>
                                        {
                                            abilityIndex === i && (
                                                <p className="item-content" id={theme === themes.light ? 'light-theme' : 'dark-theme'}>
                                                    {ability.effect}</p>
                                            )
                                        }
                                </li>     
                            ))
                        }
                    </ul>
                </div>

                <div className="moves">
                    <h2 className="moves-title">Moves</h2>
                    <ul className="moves-list">
                        {
                            moves.map((move, i) => 
                                <li key={i} className="move-item" id={theme === themes.light ? 'light-theme' : 'dark-theme'}>
                                    {move}
                                </li>
                            )
                        }
                    </ul>
                </div>
        </>

    )

}