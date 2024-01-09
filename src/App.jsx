
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
import { Helmet } from "react-helmet-async";

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
            path='/'
            element={
              <Fragment>
                <Helmet>
                  <title>Home</title>
                  <meta 
                    name="Blank Page Productions"
                    content="Capturing the heart and soul of sports through the art of storytelling."
                  />
                  <link 
                    rel="canonical" 
                    href="https://blankpageproductions.co.za/" 
                  />
                </Helmet>
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
                <ContactUs />
              </Fragment> 
            }
          /> 
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
