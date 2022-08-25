import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.css"
function Navbar(){
    const links =[
        {path:"/" , title:"DeskTime"} ,
        {path:"/demo" , title:"Demo"} ,
        {path:"/features" , title:"Features"} ,
        {path:"/price" , title:"Pricing"} ,
        {path:"/about" , title:"About us"} ,
        {path:"/faq" , title:"FAQ"} ,
        {path:"/blog" , title:"Blog"} ,
        {path:"/login" , title:"LOGIN"} ,
        {path:"/signUp" , title:"SIGN UP"} ,
        {path:"/lang" , title:"EN"} ,
        
    ]
    return(
    <>
     <div className={style.navbar}>
      {links.map((link) => (
        <NavLink
         
          className={({ isActive }) =>
            isActive ? style.active : style.default
          }
          key={link.path}
          to={link.path}
        >
          {link.title}
        </NavLink>
      ))}
     
    </div>
    </>
    )
}
export default Navbar