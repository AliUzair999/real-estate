import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Tabs, Tab, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import WhiteLogo from '../../images/logo.png'
import BlackLogo from '../../images/navlogoblack.svg'
import { useNavigate } from 'react-router-dom'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';


import './Header.css'


export default function Header() {

    const navigate = useNavigate()
    const [imgUrl, setImgUrl] = useState(true)

    //FIXED NAVBAR
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".nav")
        header.classList.toggle("active", window.scrollY > 80)
        const btn = document.querySelector(".n-button")
        btn.classList.toggle("grayBg", window.scrollY > 80)

        if (window.scrollY > 80) {
            setImgUrl(false)
        }
        else {
            setImgUrl(true)
        }
    })

    // THEME WORK
    const {toggleTheme, theme} = useContext(ThemeContext)

    return <>




        <AppBar className='nav' position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none', }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '86vw', marginLeft: "auto", marginRight: "auto", }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                   
                    <Typography variant="h6" component="div">
                        <img src={imgUrl ? WhiteLogo : BlackLogo } alt="White Logo" style={{ marginRight: '15px' }} width={81} height={43} />
                    </Typography>

                    <Tabs
                        textColor="white"
                        sx={{ marginLeft: "30px", textTransform: "lowercase", margin: "14px 14px" }}
                        // value={tabValue}
                        indicatorColor="secondary"
                    // onChange={(e, value) => setTabValue(value)}
                    >
                        <Tab label="Services" onClick={() => navigate("/services")} sx={{ fontWeight: "bold" }} />
                        <Tab label="Our Team" onClick={() => navigate("/home")} sx={{ fontWeight: "bold" }} />
                        <Tab label="Learn" onClick={() => navigate("/home")} sx={{ fontWeight: "bold" }} />
                        <Tab label="Contact" onClick={() => navigate("/contact")} sx={{ fontWeight: "bold" }} />
                    </Tabs>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', }} >
                    <a href="" target="_blank">
                        <button className="button i-button">Login</button>
                    </a>

                    <button className="button n-button" style={{ marginLeft: "10px" }} onClick={() => {
                        toggleTheme()
                        // console.log("clicked")
                        // console.log(theme)
                    }}>
                        <DarkModeOutlinedIcon />
                    </button>

                </div>

            </Toolbar>
        </AppBar>




    </>
}



