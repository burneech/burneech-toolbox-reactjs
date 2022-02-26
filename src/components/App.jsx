import { useState } from "react"
import "@fontsource/roboto"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Switch, Container, Typography, FormGroup, FormControlLabel, CssBaseline } from "@mui/material"
import Data from "../data/ToolboxData.json"
import Category from "./Category/"

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

        {CategoriesList}

      </Container>
    </ThemeProvider>
  )
}