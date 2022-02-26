import { useState } from "react"
import "@fontsource/roboto"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Switch, Container, FormGroup, FormControlLabel, CssBaseline } from "@mui/material"
import Data from "../data/ToolboxData.json"
import Category from "./Category/"
import logo from '../data/logo.svg'
import '../index.css'

const dark = { palette: { mode: "dark" } }
const light = { palette: { mode: "light" } }

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  function changeTheme() { setIsDarkTheme(!isDarkTheme) }

  const CategoriesList = Data.map((category) => {
    return <Category data={category} key={category.CategoryID} />
  })

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <Container>

        <FormGroup>
          <FormControlLabel
            control={<Switch checked={isDarkTheme} onChange={changeTheme} />}
            label={isDarkTheme ? "Dark" : "Light"} />
        </FormGroup>

        <img className="logo" src={logo} alt="logo" />

        {CategoriesList}

      </Container>
    </ThemeProvider>
  )
}