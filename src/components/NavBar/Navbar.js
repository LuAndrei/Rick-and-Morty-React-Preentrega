import {Link} from "react-router-dom";
import {  CartContext } from "../../Shop/ShoppingCartContext/ShoppingCartContext";
import React, { useContext } from "react";




import "./Style.css";


const NavBar = () =>{

    const [cart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
   
  );

 
   
 
    return(
        <nav className="nav-container">
            
            <ul className="nav-ul">

                <Link className="li" to="/ " >Home</Link>
                <Link className="li" to="/Contact">Contact</Link>
                <Link className="li" to="/About">About</Link>
                <Link className="li" to="/Category/Male">Male</Link>
                <Link className="li" to="/Category/Female">Female</Link>
                <button className="boton-shop"><Link className="li" to="/shop" >Shop: ${totalPrice} </Link></button>
            <nav className="nav__logo">    
            <button className="boton-shop"><Link className="li" to="/cart" >🛒:{quantity } </Link></button> 
            </nav>
                
                

                

                
               
                
                
                
               

                

                
                
                
            </ul>
        </nav>
    )
}
export default NavBar;