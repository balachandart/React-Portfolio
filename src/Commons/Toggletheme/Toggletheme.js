import React, { useEffect, useState } from 'react'
import {useMediaQuery} from 'react-responsive'
import Toggle from 'react-toggle'
import "react-toggle/style.css"
import './Toggletheme.css'
const Toggletheme = () => {
  useMediaQuery(
    {
      query:"(prefers-color-scheme: dark)"
    },
    undefined,
    preferDark=>{
            setIsDark(preferDark)
    }
  )
  const storageKeys='theme-preference'
  const[isDark,setIsDark]=useState(JSON.parse(localStorage.getItem(storageKeys)))
  useEffect(()=>{
    if(isDark){
      document.firstElementChild
      .setAttribute('data-theme','dark')
      localStorage.setItem(storageKeys, JSON.stringify(true))
      return;
    }
    else{
      document.firstElementChild.setAttribute('data-theme','light')
      localStorage.setItem(storageKeys, JSON.stringify(false))
    }
  },[isDark])
  return (
    <div className='theme__toggle__container'>
          <Toggle
            checked={isDark}
            onChange={(event)=>setIsDark(event.target.checked)}
            icons={false}
          />
    </div>
  )
}

export default Toggletheme