import React, { VFC } from 'react';
import "./Header.css";
import {useState,useEffect} from 'react';
import {FiSun,FiMoon} from 'react-icons/fi'
const Header:VFC = () => {
  const [darkMode,setDarkMode] = useState<boolean>(false);
  useEffect(() => {
    if(darkMode) {
      document.body.classList.toggle("dark-mode")
    }
    else {
      document.body.classList.remove("dark-mode")
    }
    
  },[darkMode])
  return (
    <header className="header">
      <div className="header__row">
      <h1>TodoList App</h1>
 <span onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? <FiSun /> : <FiMoon />}
 </span>
      </div>
    </header>
  )
};

export default Header;
