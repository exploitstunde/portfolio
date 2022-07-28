import React, {useState} from 'react'
import '../App.css'
import { FaTwitter, FaLinkedinIn} from "react-icons/fa";
import { HiOutlineMail} from "react-icons/hi";
import { AiOutlineGithub} from "react-icons/ai";
import { FiChevronsUp } from "react-icons/fi";
import {Link} from 'react-scroll'

const Footer = ({text, buttonclkd}) => {
    const [toggle, setToggle] = useState(buttonclkd)
    const mydate = new Date()
    const currDateIndex = (mydate.getFullYear()).toString()
  return (
    <div className={toggle ? "footer-container" : "footer-container_"}>
        <div className="footer-icons">
            <div id='footer-logo' />
            <span id='foot-slogan'>Living, learning, & leveling up one day at a time.</span>
            <div className="footer-icons-container">
              <a className='foot-ico-cont' href='https://twitter.com/tundeakindelee'><FaTwitter id='foot-ico' target="_blank" rel="noopener noreferrer"/></a>
              <a className='foot-ico-cont' href='https://www.linkedin.com/in/tunde-akindele-30b42197/' target="_blank" rel="noopener noreferrer"><FaLinkedinIn id='foot-ico'/></a>
              <a className='foot-ico-cont' href='https://github.com/exploitstunde' target="_blank" rel="noopener noreferrer"><AiOutlineGithub id='foot-ico'/></a>
              <a className='foot-ico-cont' href='mailto:babatundeakano@gmail.com' target="_blank" rel="noopener noreferrer"><HiOutlineMail id='foot-ico'/></a>
            </div>
            <span id='copyright-footer'>Obaloluwa Oduyemi &copy; {currDateIndex}</span>
            <div id='return-top-button'><Link to="home" spy={true} smooth={true}><FiChevronsUp id='rtb-icon'/></Link></div>
        </div>
    </div>
  )
}

export default Footer