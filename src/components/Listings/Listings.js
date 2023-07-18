import React from 'react';
import './Listings.css'
import img01 from '../../images/home/list-01.webp'
import { Typography } from '@mui/material';

import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import StraightenIcon from '@mui/icons-material/Straighten';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import img1 from '../../images/home/image1.jpg'
import img2 from '../../images/home/image2.jpg'
import img3 from '../../images/home/image3.jpg'
import img4 from '../../images/home/image4.jpg'
import img5 from '../../images/home/image5.jpg'
import img6 from '../../images/home/image6.jpg'
import img7 from '../../images/home/image7.jpg'
import img8 from '../../images/home/image8.jpg'


export default function Listings() {
    const featured = [
        {
            img: img1,
            tags: ["Listed By Gomez", 'NEW Today'],
            title: "7029 Clubgate Dr.",
            price: "$209,000",
            address: "Corpus Christi, TX 78413",
            bed: "3 Bed",
            bath: "2 bath",
            area: "1,350 Sqft"

        },
        {
            img: img2,
            tags: ["Listed By Gomez",],
            title: "2618 Fleece Dr.",
            price: "$330,000",
            address: "Corpus Christi, TX 78414",
            bed: "4 Bed",
            bath: "2 bath",
            area: "2,246 Sqft"

        },
        {
            img: img3,
            tags: ["Listed By Gomez", 'NEW Today'],
            title: "16022 Cuttysark St.",
            price: "$600,000",
            address: "Corpus Christi, TX 78418",
            bed: "3 Bed",
            bath: "2 bath",
            area: "2,120 Sqft"

        },
        {
            img: img4,
            tags: ["Listed By Gomez",],
            title: "12922 Glenyork Ct.",
            price: "$410,000",
            address: "Houston, TX 77429",
            bed: "5 Bed",
            bath: "3 bath",
            area: "3,031 Sqft"

        },

    ]

    const corpus = [
        {
            img: img5,
            tags: ['NEW Today'],
            title: "4221 Archdale Dr.",
            price: "$165,900",
            address: "Corpus Christi, TX 78416",
            bed: "3 Bed",
            bath: "2 bath",
            area: "1,098  Sqft"

        },
        {
            img: img6,
            tags: [],
            title: "3709 Piedra Creek Dr.",
            price: "$192,500",
            address: "Corpus Christi, TX 78410",
            bed: "3 Bed",
            bath: "2 bath",
            area: "1,112  Sqft"

        },
        {
            img: img7,
            tags: [],
            title: "1117 Shephard Dr.",
            price: "$169,900",
            address: "Corpus Christi, TX 78412",
            bed: "3 Bed",
            bath: "1 bath",
            area: "1,310  Sqft"

        },
        {
            img: img8,
            tags: ['2 Dasy Ago'],
            title: "3626 Curtiss St.",
            price: "$189,900",
            address: "Corpus Christi, TX 78405",
            bed: "4 Bed",
            bath: "4 bath",
            area: "2,355  Sqft"

        },
    ]


    return <>

        <div id='featured' className='list'>
            <div className='heading'>
                <Typography variant='text1' component="h5" sx={{ fontSize: "1.25rem", lineHeight: "1.75rem" }}>
                    Featured Listings

                </Typography>
            </div>

            <div className='listings'>
                {featured.map((value, index) => {

                    return <div className='indList' key={index}>
                        <div className='image'>
                            <img src={value.img} alt={'Image' + index} />
                        </div>

                        <div className='imgTags'>
                            <Typography>
                                {value.tags[0]}
                            </Typography>

                            {(value.tags[1])
                                ? <Typography>
                                    {value.tags[1]}
                                </Typography>
                                : <></>}

                        </div>


                        {/* {value.tags.map((value, index) => {

                            return <div className='imgTags' key={index}>
                                <Typography>
                                    {value}
                                </Typography>

                                <Typography>
                                    NEW Today
                                </Typography>
                            </div>

                        })} */}


                        <div className='listDesc'>

                            <div className='desc1'>
                                <div className='descHeading'>
                                    <Typography variant='text1' component="p" sx={{ fontSize: "15px", fontWeight: "bold", marginTop: "4px" }}>
                                        {value.title}
                                    </Typography>
                                </div>
                                <div className='descPrice'>
                                    <Typography variant='text1' component="p" sx={{ fontSize: "16px", fontWeight: "900", color: "var(--green)", marginTop: "2px" }}>
                                        {value.price}
                                    </Typography>
                                </div>
                            </div>

                            <div className='desc2'>
                                <Typography variant='text1' component="p" sx={{ fontSize: ".875rem", fontWeight: "500", lineHeight: "1.25rem", color: "black" }}>
                                    {value.address}
                                </Typography>

                            </div>

                            <div className='desc3'>

                                <div className='descRooms'>
                                    <LocalHotelIcon sx={{ opacity: "0.65", fontSize: "20px" }} />
                                    <Typography variant='text1' component='p' sx={{ fontWeight: "500", color: "black", opacity: "0.85", marginLeft: "2px" }}>
                                        {value.bed}
                                    </Typography>
                                </div>

                                <div className='descBaths'>
                                    <BathtubIcon sx={{ opacity: "0.65", fontSize: "20px" }} />
                                    <Typography variant='text1' component='p' sx={{ fontWeight: "500", color: "black", opacity: "0.85", marginLeft: "2px" }}>
                                        {value.bath}
                                    </Typography>

                                </div>
                                <div className='descArea'>
                                    <StraightenIcon sx={{ opacity: "0.65", fontSize: "20px" }} />
                                    <Typography variant='text1' component='p' sx={{ fontWeight: "500", color: "black", opacity: "0.85", marginLeft: "2px" }}>
                                        {value.area}
                                    </Typography>
                                </div>
                            </div>

                        </div>


                    </div>

                })}





            </div>

        </div>


        <div id='corpus' className='list'>
            <div className='heading'>
                <Typography variant='text1' component="h5" sx={{ fontSize: "1.25rem", lineHeight: "1.75rem" }}>
                    Corpus Christi, Under 200k
                </Typography>
            </div>

            <div className='listings'>
                {corpus.map((value, index) => {

                    return <div className='indList' key={index}>
                        <div className='image'>
                            <img src={value.img} alt={'Image' + index} />
                        </div>

                        <div className='imgTags'>
                            <Typography>
                                {value.tags[0]}
                            </Typography>

                            {(value.tags[1])
                                ? <Typography>
                                    {value.tags[1]}
                                </Typography>
                                : <></>}

                        </div>


                        {/* {value.tags.map((value, index) => {

                            return <div className='imgTags' key={index}>
                                <Typography>
                                    {value}
                                </Typography>

                                <Typography>
                                    NEW Today
                                </Typography>
                            </div>

                        })} */}


                        <div className='listDesc'>

                            <div className='desc1'>
                                <div className='descHeading'>
                                    <Typography variant='text1' component="p" sx={{ fontSize: "15px", fontWeight: "bold", marginTop: "4px" }}>
                                        {value.title}
                                    </Typography>
                                </div>
                                <div className='descPrice'>
                                    <Typography variant='text1' component="p" sx={{ fontSize: "16px", fontWeight: "900", color: "var(--green)", marginTop: "2px" }}>
                                        {value.price}
                                    </Typography>
                                </div>
                            </div>

                            <div className='desc2'>
                                <Typography variant='text1' component="p" sx={{ fontSize: ".875rem", fontWeight: "500", lineHeight: "1.25rem", color: "black" }}>
                                    {value.address}
                                </Typography>

                            </div>

                            <div className='desc3'>

                                <div className='descRooms'>
                                    <LocalHotelIcon sx={{ opacity: "0.65", fontSize: "20px" }} />
                                    <Typography variant='text1' component='p' sx={{ fontWeight: "500", color: "black", opacity: "0.85", marginLeft: "2px" }}>
                                        {value.bed}
                                    </Typography>
                                </div>

                                <div className='descBaths'>
                                    <BathtubIcon sx={{ opacity: "0.65", fontSize: "20px" }} />
                                    <Typography variant='text1' component='p' sx={{ fontWeight: "500", color: "black", opacity: "0.85", marginLeft: "2px" }}>
                                        {value.bath}
                                    </Typography>

                                </div>
                                <div className='descArea'>
                                    <StraightenIcon sx={{ opacity: "0.65", fontSize: "20px" }} />
                                    <Typography variant='text1' component='p' sx={{ fontWeight: "500", color: "black", opacity: "0.85", marginLeft: "2px" }}>
                                        {value.area}
                                    </Typography>
                                </div>
                            </div>

                        </div>


                    </div>

                })}





            </div>

        </div>

        <div style={{ width: "85%", margin: "0 auto", flexDirection:"row", display:"flex", fontWeight:"bold", fontSize:"16px" }}>
            <Typography variant='text1' component='p' sx={{ fontWeight: "bold", marginLeft: "10px" }}>
                Browse all listings
            </Typography>
            <ArrowRightAltIcon/>
        </div>






        {/* 
        <div id='list1' className='list'>
            <div className='heading'>
                <Typography variant='text1' component="h5" sx={{ fontSize: "1.25rem", lineHeight: "1.75rem" }}>
                    Featured Listings

                </Typography>
            </div>

            <div className='listings'>

                <div className='indList'>
                    <div className='image'>
                        <img src={img01} alt='Image01' />
                    </div>

                    <div className='imgTags'>
                        <Typography>
                            Listed By Gomez
                        </Typography>

                        <Typography>
                            NEW Today
                        </Typography>
                    </div>

                    <div className='listDesc'>

                        <div className='desc1'>
                            <div className='descHeading'>
                                <Typography variant='text1' component="p" sx={{ fontSize: "15px", fontWeight: "bold", marginTop: "4px" }}>
                                    7029 Clubgate Dr.
                                </Typography>
                            </div>
                            <div className='descPrice'>
                                <Typography variant='text1' component="p" sx={{ fontSize: "16px", fontWeight: "900", color: "var(--green)", marginTop: "2px" }}>
                                    $209,000
                                </Typography>
                            </div>
                        </div>

                        <div className='desc2'>
                            <Typography variant='text1' component="p" sx={{ fontSize: ".875rem", fontWeight: "500", lineHeight: "1.25rem", color: "black" }}>
                                Corpus Christi, TX 78413
                            </Typography>

                        </div>

                        <div className='desc3'>

                            <div className='descRooms'>
                                <LocalHotelIcon sx={{ opacity: "0.65", fontSize: "20px" }} />
                                <Typography variant='text1' component='p' sx={{ fontWeight: "500", color: "black", opacity: "0.85", marginLeft: "2px" }}>
                                    3 Bed
                                </Typography>
                            </div>

                            <div className='descBaths'>
                                <BathtubIcon sx={{ opacity: "0.65", fontSize: "20px" }} />
                                <Typography variant='text1' component='p' sx={{ fontWeight: "500", color: "black", opacity: "0.85", marginLeft: "2px" }}>
                                    2 Bath
                                </Typography>

                            </div>
                            <div className='descArea'>
                                <StraightenIcon sx={{ opacity: "0.65", fontSize: "20px" }} />
                                <Typography variant='text1' component='p' sx={{ fontWeight: "500", color: "black", opacity: "0.85", marginLeft: "2px" }}>
                                    1,350 Sqft
                                </Typography>
                            </div>
                        </div>

                    </div>


                </div>



            </div>

        </div> */}




    </>
}



