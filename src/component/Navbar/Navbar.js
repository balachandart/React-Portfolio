import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import Logo from '../../Commons/Logo/Logo'
import {menus} from '../../data' 
import SocialHandles from '../../Commons/SocialHandles/SocialHandles'
import {TiThMenu} from 'react-icons/ti'
import SideBar from '../../Commons/Sidebar/SideBar'
import Toggletheme from '../../Commons/Toggletheme/Toggletheme'


const Navbar = () => {
  const[openSidebar,setOpenSidebar]=useState(false)
  const[visible,setVisible]=useState(false)
  const handleScroll=()=>{
    const currentScrollPosition=window.scrollY;
    if(currentScrollPosition > 70){
      return setVisible(true)
    }
    else{
      setVisible(false)
    }
  }
useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return ()=> window.removeEventListener("scroll",handleScroll)
})


  return (
    <nav className={`navigation__bar ${visible ?'visible':""}`}>
      <SideBar 
      open={openSidebar}
      onClose={()=>setOpenSidebar(!openSidebar)}/>
      <div className='column'>
        <Logo/>
      </div>
      <div className='column menu__container'>
        {
           menus.map((menu,index)=>(
            <a href={`#${menu.name.toLowerCase()}`} className="menu__item" onClick={onclose}  key={index}>
             {menu.name}
            </a>
           ))
        }
       
      </div>
      <div className='column'>
        <SocialHandles />
        <Toggletheme />
        <a href="#contact" className='btn btn__primary'>Let's Talk</a>
        <div className="menu__icons" onClick={()=>setOpenSidebar(!openSidebar)}>
          <TiThMenu />
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar