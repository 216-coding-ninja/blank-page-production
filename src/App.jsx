
import NavigationBar from "@/common/components/NavigationBar"
import Hero from "./pages/Hero/Hero"

import { createTheme, CssBaseline, ThemeProvider, styled } from "@mui/material";
import { typography } from "./common/theme/typography";

import About from "./pages/About/About";

import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";
import { Fragment } from "react";
import ContactUs from "./pages/ContactUs/ContactUs";

const theme = createTheme({
  typography: typography()
})


function App() {
  return (
    <ThemeProvider
     theme={theme}
    >
      
      <BrowserRouter>
        <Routes>
          <Route 
            index 
            element={
              <Fragment>
                <NavigationBar />
                <Hero />
                <ContactUs />
              </Fragment>
            }
          />
          <Route 
            path='/aboutus' 
            element={
              <Fragment>
                <NavigationBar />
                <About /> 
              </Fragment> 
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
