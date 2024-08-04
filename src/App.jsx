import './App.css'
import '../src/styles/responsive/main.css'
import React from 'react'
import { ThemeProvider, useTheme, themes } from './context/themeContext'
import Toggler from './assets/components/buttonThemeToggler'
import Search from './assets/components/searchBar'
import Title from './assets/components/title'
import { AppRoutes } from './assets/components/routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const { theme } = useTheme()
  
  return (  
    <>
      <header className='cabecalho'>
        <Search />
        <Title />
        <Toggler />
      </header>

      <main className='menu-pokedex' id= {theme === themes.light ? 'light-theme' : 'dark-theme'}>
        <AppRoutes />
      </main>
    </>
  )
}

const RootApp = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default RootApp





