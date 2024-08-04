import { Route, Routes } from "react-router-dom";
import { List } from "./list.jsx"
import { PokemonDetails } from "./pokemon-page/pokemonDetails";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/quest-pokedex/' element={ <List/> }/>
            <Route path='/quest-pokedex/pokemon/:id' element={ <PokemonDetails/> }/>
        </Routes>
    )
}

export { AppRoutes }