import React from 'react';
import './Hero.css'
import { Typography } from '@mui/material'

import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import {useContext} from 'react'


export default function Hero() {

    const {theme} = useContext(ThemeContext)
    console.log(theme)


    return <>
        <div className='h-img' style={{ backgroundColor:"transparent"}}>
            <div className='h-overlay'>

                <div className="hero" id="hero">

                    <div className="h-left">
                        <div className="h-desc">
                            <Typography variant='h2' component='h1' sx={{ color: "#dfdfdf", fontWeight: "600", fontSize: "56px" }}>Marketing Makes</Typography>
                            <Typography variant='h2' component='h1' sx={{ color: "var(--green)", fontWeight: "600", fontSize: "56px" }}>The Difference</Typography>

                            <Typography variant='h6' component='text' sx={{ color: '#9fa7a6', fontWeight: "600", fontSize:"20px" }}>Gomez Properties is a full service brokerage, serving Corpus Christi and the surrounding areas for the last 2 decades. Buy, Sell & Rent with Gomez.</Typography>



                        </div>
                        <div className='h-buttons'>

                            <a href="" target="_blank">
                                <button className="button">Browse Homes</button>
                            </a>

                            <a href="" target="_blank">
                                Find An Agent
                            </a>
                        </div>

                    </div>


                    <div className="h-right">
                        <div className="h-form">
                            <Typography variant='h4' component='h2' sx={{ color: "#F5F5F5", fontWeight: "bold", fontSize: "24px", opacity: "0.87" }}>
                                How Much Is Your Home Worth?
                            </Typography>

                            <Typography variant='text1' component='p' sx={{ color: '#9fa7a6', fontWeight: "500", opacity: "0.87", marginBottom: "10px" }} >
                                Recieve a personalized estimate via e-mail within the next 24hrs                        </Typography>
                            <form>
                                <label htmlFor="full_name" className='label'>
                                    Full Name
                                </label>
                               
                                <input type="text" name="full_name" className="user" placeholder="" />

                                <label className='label' htmlFor="user_email" >
                                    Email
                                </label>
                               
                                <input type="email" name="user_email" className="user" placeholder="" />

                                <label className='label' htmlFor="address">
                                    Address
                                </label>
                                
                                <input type="address" name="address" className="user" placeholder="" />

                                <iframe className='robot' title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lcc4jgfAAAAAOos_X4DsbegiUxIM7pgi8dyFqyQ&amp;co=aHR0cHM6Ly9nb21lenByb3BlcnRpZXMudmVyY2VsLmFwcDo0NDM.&amp;hl=en&amp;type=image&amp;v=SglpK98hSCn2CroR0bKRSJl5&amp;theme=dark&amp;size=normal&amp;badge=bottomright&amp;cb=43x5ndeegzb5" width="304" height="78" role="presentation" name="a-gwgeofygo28z" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>


                                <input type="submit" value="Get Your Home value" className="button" style={{fontWeight:"normal", marginTop: "10px"}}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}



