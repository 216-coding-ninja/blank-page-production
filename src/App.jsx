
import NavigationBar from "@/common/components/NavigationBar"
import Hero from "./pages/Hero/Hero"

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { typography } from "./common/theme/typography";

import About from "./pages/About/About";

import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";
import { styled } from '@mui/system';
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
                  <title>Unveiling Sports Tales - Blank Page Productions</title>
                  <meta 
                    name="description"
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
              <Helmet>
                <title>About Us - Blank Page Productions</title>
                <meta 
                  name="description"
                  content="In the dynamic world of media production, there are those who craft narratives that transcend the boundaries of traditional storytelling"
                />
                <link 
                  rel="canonical" 
                  href="https://blankpageproductions.co.za/" 
                />
              </Helmet>
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
