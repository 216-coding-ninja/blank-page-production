
import NavigationBar from "@/common/components/NavigationBar"
import Hero from "./pages/Hero/Hero"

import { createTheme, CssBaseline, ThemeProvider, styled } from "@mui/material";
import { typography } from "./common/theme/typography";

import About from "./pages/About/About";

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
