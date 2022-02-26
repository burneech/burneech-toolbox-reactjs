import { useState } from "react"
import "@fontsource/roboto"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Switch, Container, FormGroup, IconButton, Grid, Link,
  FormControlLabel, CssBaseline, Typography, Stack, Divider
} from "@mui/material"

import Category from "./Category/"
import Data from "../data/ToolboxData.json"
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

        <Grid container justifyContent="flex-end">
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={isDarkTheme} onChange={changeTheme} />}
              label={isDarkTheme ? "Dark" : "Light"} />
          </FormGroup>
        </Grid>

        <img className="logo" src={logo} alt="logo" />

        <Typography variant="h4" sx={{ textShadow: 10, textAlign: 'center' }}>
          Welcome to my web-toolbox.
        </Typography>

        <Typography variant="subtitle2" sx={{ mb: 4, textAlign: 'center' }} color="text.secondary">
          On this website you can find collections of useful (and mostly free) online tools and websites.
        </Typography>

        {CategoriesList}

        <Stack alignItems="center" sx={{ mt: 4, mb: 4 }}>
          <Grid>
            <IconButton aria-label="github" href="https://github.com/burneech" target="_blank">
              <GitHubIcon />
            </IconButton>
            <IconButton aria-label="linkedin" href="https://linkedin.com/in/mateo-brnic" target="_blank">
              <LinkedInIcon />
            </IconButton>
          </Grid>
          <Link href="https://www.vecteezy.com/free-vector/toolbox" target="_blank" underline="none">
            <Typography variant="caption" color="text.secondary">
              Toolbox Vectors by Vecteezy
            </Typography>
          </Link>
        </Stack>

      </Container>
    </ThemeProvider >
  )
}