import React, { createContext, useState, useContext } from 'react'

export const themes = {
    light: 'light',
    dark: 'dark'
}

const themeContext = createContext()

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(themes.light)

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light))
    }

    return (
        <themeContext.Provider value = {{theme, toggleTheme}}>
            {children}
        </themeContext.Provider>
    )
}

export const useTheme = () => useContext(themeContext)