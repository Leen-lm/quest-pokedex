import React from "react";
import { useTheme, themes } from "../../context/themeContext";
import '../../styles/toggler.css'


const Toggler = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button className="toggler" onClick={toggleTheme}>
            {theme === themes.light ? 'Dark' : 'Light'}
        </button>
    )
}

export default Toggler