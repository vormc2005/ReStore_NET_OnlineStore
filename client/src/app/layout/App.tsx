import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AboutPage from "../../features/catalog/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import HomePage from "../../features/catalog/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import Header from "./Header";
import 'react-toastify/dist/ReactToastify.css'
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";



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
     <ToastContainer position='top-right' hideProgressBar/>    
    <CssBaseline />
     <Header darkMode={darkMode} handleThemeChange={handleThemChange}/>
     <Container>
       <Switch>      
            <Route exact path='/' component={HomePage} /> 
            <Route path='/about' component={AboutPage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/server-error' component={ServerError} />
            <Route exact path='/catalog' component={Catalog} />
            <Route path='/catalog/:id' component={ProductDetails} />        
            <Route component={NotFound} />
        </Switch>
     </Container>
   </ThemeProvider>
    
  );
}

export default App;
