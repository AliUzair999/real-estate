import React from 'react';
import './Home.css'
import Hero from '../../components/Hero/Hero';
import Listings from '../../components/Listings/Listings';
import ExtraSpace from '../../components/ExtraSpace/ExtraSpace';
import Agent from '../../components/Agent/Agent';
import Expertise from '../../components/Expertise/Expertise';
import Team from '../../components/Team/Team';
import Reviews from '../../components/Reviews/Reviews';


export default function Home() {
    return <>
        {/* <p> This is Home page</p> */}
        <Hero />
        <ExtraSpace height="665px" />

        <Listings />
        {/* <ExtraSpace height="30px" /> */}

        <Agent />

        <Expertise />
        <Team />
        <Reviews />




    </>
}



