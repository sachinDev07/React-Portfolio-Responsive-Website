import React from 'react'
import './topbar.scss'
import { Person, Mail } from '@mui/icons-material';

export default function topbar( { menuOpen, setMenuOpen } ) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className='wrapper'>
            <div className="left">

                <a href='#intro' className="logo">genius.</a>

                <div className="itemContainer">
                    <Person className="icon" />
                    <span>+44 924 12 56</span>
                </div>

                <div className="itemContainer">
                    <Mail className="icon" />
                    <span>sachin@gmail.com</span>
                </div>

            </div>
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)} >
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
                </div>
            </div>
        </div>      
    </div>
  );
}
