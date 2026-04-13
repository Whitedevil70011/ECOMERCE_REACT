 import  './Header.css';

 import {useState} from 'react';


  import Cart from '../Cart/Cart';



function Heder({toggleCart1, toggleCart2}) {


    return (
        
        <div className="header">
        <h1 className="header__title"   onClick={toggleCart1}>My React App</h1>
        <div className="header__actions">
            <button className="header__btn" type="button" onClick={toggleCart1}>Cart</button>
            <button className="header__btn header__btn--ghost" type="button" >Add product</button>
        </div>
        
       
        </div>
    )
}

export default Heder;