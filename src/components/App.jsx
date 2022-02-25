import { useState } from "react"
import "@fontsource/roboto"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import {
  Switch,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  CssBaseline,
} from "@mui/material"
import AccordionComponent from "./AccordionComponent/"

const dark = { palette: { mode: "dark" } }
const light = { palette: { mode: "light" } }

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)
  function changeTheme() { setIsDarkTheme(!isDarkTheme) }

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <Container>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={isDarkTheme} onChange={changeTheme} />}
            label={isDarkTheme ? "Dark" : "Light"} />
        </FormGroup>

        <Typography variant="h4" gutterBottom component="div">
          The theme is {isDarkTheme ? "dark" : "light"}
        </Typography>

        <AccordionComponent />
      </Container>
    </ThemeProvider>
  )
}