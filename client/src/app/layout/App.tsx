import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AboutPage from "../../features/catalog/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import HomePage from "../../features/catalog/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import Header from "./Header";



function App() {
  const [darkMode, setDarkMode]= useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
  palette:{
    mode: paletteType,
    background:{
      default: paletteType === 'light' ? '#eaeaea' : '#121212'
    }
  }
})

const handleThemChange=()=>{
  setDarkMode(!darkMode);
}

  return (
    
   <ThemeProvider theme={theme}>
    <CssBaseline />
     <Header darkMode={darkMode} handleThemeChange={handleThemChange}/>
     <Container>
       <Routes>
            <Route path='/' element={<HomePage/>} /> 
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/contact' element={<ContactPage/>} />
            <Route path='/catalog' element={<Catalog/>} />
            <Route path='/catalog/:id' element={<ProductDetails/>} />
        </Routes>
     </Container>
   </ThemeProvider>
    
  );
}

export default App;
