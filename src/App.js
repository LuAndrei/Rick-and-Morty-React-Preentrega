import Banner from './components/Header/Banner';
import NavBar from './components/NavBar/Navbar';




import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Category from './Pages/Category/Category';
import DetailPage from './Pages/DetailPage/DetailPage';

import { ItemList } from './Shop/item/ItemList'; 
import { ShoppingCart } from './Shop/ShoppingCart/ShoppingCart';
import { ShoppingCartProvider } from './Shop/ShoppingCartContext/ShoppingCartContext';








const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (

    <ShoppingCartProvider>
    <BrowserRouter>

<ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main></main>
    </ThemeProvider>
    <div className="App">
    <NavBar/> 
     
      <Banner/>
    
     
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/About' element ={<About/>}/>
      <Route path='/Contact' element ={<Contact/>}/>
      <Route path='/Detail/:id' element ={<DetailPage/>}/>
      <Route path='/Category/:CategoryId' element ={<Category/>}/>
      <Route path="/Shop" element={<ItemList />} />
      <Route path="/cart" element={<ShoppingCart />} />
      

      

      
      
     

      
      
      
      
          
          
      </Routes>
      
      
      
      
     
      
      
    </div>
    </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
