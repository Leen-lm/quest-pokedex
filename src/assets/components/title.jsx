import React from 'react'
import '../../styles/title.css'
import { Link } from 'react-router-dom'

const Title = () => {
    return (
        <Link to={`/`}>
            <h2 className='header-title'>PokedeX</h2>
        </Link>
    )
}

export default Title