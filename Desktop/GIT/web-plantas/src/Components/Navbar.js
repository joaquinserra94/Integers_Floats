import React, { useState } from 'react';
import { Link } from "react-scroll";
import styles from './Navbar.module.css';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";   //Aqui deberiamos instalar las 3 rayitas del menu, pero me da error
//import { CiMenuBurger } from 'reat-icons/ci';


const Navbar = () => {
    const [navBarOpen, setNavbarOpen] = useState(false);
    const links=[                                   //Seguidamente indicaremos los dintintos links que tendrá nuestro Navbar
        {                                           //En el caso de que sea necesario agregar mas links, poner id:x y debajo el link
            id:1,
            link: "Home",
        },
        {
            id:2,
            link: "Services",
        },
        {
            id:3,
            link: "HowWeWork",
        },
        {
            id:4,
            link: "Benefits",
        },

        
        
    ]
//Aqui haremos un mapeo para que quede dentro de una lista ordenada
//En el caso de que el link sea HowWeWork, se mostrará How we work hacemos la pregunta con ?
//En el caso de que el link sea diferente a HowWeWork, se mostrará el link por eso ponemos :
  return (
    <div className ={navBarOpen === true ? styles.navBar : styles.navOpen}> 
      <p>TESOROS ARGENTINOS | Frutales y Flores</p>                                     
      { !navBarOpen ? (
          <AiOutlineMenu onClick = {() => setNavbarOpen(!navBarOpen)} size={25} />
      ) : (
      <AiOutlineClose onClick = {() => setNavbarOpen(!navBarOpen)} size={25}/> 
      )}
      {
        navBarOpen &&
        <ul>                                  
        {links.map((x) => (
          <div>
            <Link>{x.link === "HowWeWork" ? "How we work" : x.link}</Link>
          </div>
        ))}
      </ul>
      }
    </div>
  );
};

export default Navbar;