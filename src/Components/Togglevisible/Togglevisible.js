import React,{useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import "../Togglebutton/togglebuttn.css"

const Togglevisible = ({currentTogState}) => {
    const [modee, setModee] = useState(true)
    
    const toggleState = () =>{
        currentTogState(setModee(!modee))
        setModee(!modee)
    }
  return (
    <div className= "toggle_contain_scrn" onClick={toggleState}>
        {modee ? <span id="darkmode"><GiHamburgerMenu id="contrast_icon"/></span> : <span id="darkmode"><FaTimes id="contrast_icon" /></span> }
    </div>
  )
}

export default Togglevisible