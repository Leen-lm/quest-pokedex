import '../../styles/searchBar.css'
import { useState } from 'react'
import { setPokemon } from '../objects/pokemon'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const data = await setPokemon(input)
            navigate(`/pokemon/${data.id}`, {state: {pokemon: data}})
        } catch (error) {
            console.log("Error fetching pokemon data", error)
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" name='nome' id="nome" value={input} onChange={handleInputChange} placeholder='Digite o nome do seu pokem...' className="search"/>
            <input type="submit" value='search' className='submit'/>
        </form>

    )

}

export default Search