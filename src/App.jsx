
import NavigationBar from "@/common/components/NavigationBar"
import Hero from "./pages/Hero"

import { createTheme, CssBaseline, ThemeProvider, styled } from "@mui/material";
import { typography } from "./common/theme/typography";
import { Fragment } from "react";

const theme = createTheme({
  typography: typography()
})


function App() {
  return (
    <ThemeProvider
     theme={theme}
    >
        <NavigationBar />
        <Hero />
      
    </ThemeProvider>
   
  )
}

export default App
