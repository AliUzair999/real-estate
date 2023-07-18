import React from 'react';
import './ExtraSpace.css'


export default function ExtraSpace({ height }) {

    return <>
        <div style={{ height: height, width: "100%", visibility: "hidden" }}>

        </div>

        {/* <div style={{height:`${height}px`, width:"100%", backgroundColor:"red"}}>

    </div> */}
    </>
}



