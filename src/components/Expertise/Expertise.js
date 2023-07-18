import React from 'react';
import { Container, Grid, Box, Typography, } from '@mui/material';
import RedeemIcon from '@mui/icons-material/Redeem';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

import { Icon } from '@mui/material';
import { Padding } from '@mui/icons-material';
import { useState } from 'react';

const Expertise = () => {


    const sectionContainerStyle = {
        width: '86%',
        margin: '0 auto',
        marginTop: "50px",
        alignItems: 'flex-start',
    };

    const columnStyle = {
        display: 'flex',
        // alignItems: 'center',
        marginBottom: '1.5rem',
    };

    const iconContainerStyle = {
        backgroundColor: 'rgba(204, 204, 204, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        width: '48px',
        height: '36px',
        marginRight: "10px",
        padding: "6px",
        borderRadius: "10px",
    };

    const contentStyle = {
        flex: '1',
    };

    const iconStyle = {
        fontSize: '32px',
        alignSelf: 'flex-start',
        backgroundColor: "transparent"

    };



    return (<>

        <Container style={sectionContainerStyle}>
            <Grid container spacing={4}>

                <Grid item xs={12} sm={6} md={3}>
                    <Box style={columnStyle}>
                        <Box sx={iconContainerStyle}>
                            <Icon component={RedeemIcon} style={iconStyle} />
                        </Box>
                        <div>
                            <Typography variant="h6" sx={{ fontSize: "16px", paddingBottom: "6px", fontWeight: "600" }}>Exceptional  Service</Typography>
                            <Typography>We take care of you like family. Our team of agents and staff are always available for you throughout the entire process.</Typography>
                        </div>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Box style={columnStyle}>
                        <Box sx={iconContainerStyle}>
                            <Icon component={TuneOutlinedIcon} style={iconStyle} />
                        </Box>
                        <div>
                            <Typography variant="h6" sx={{ fontSize: "16px", paddingBottom: "6px", fontWeight: "600" }}>Skilled Negotiations</Typography>
                            <Typography>Whether representing you as a buying or selling agent, we get you the best number, relative to the market and your situation.</Typography>
                        </div>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Box style={columnStyle}>
                        <Box sx={iconContainerStyle}>
                            <Icon component={QuestionAnswerOutlinedIcon} style={iconStyle} />
                        </Box>
                        <div>
                            <Typography variant="h6" sx={{ fontSize: "16px", paddingBottom: "6px", fontWeight: "600" }}>Clear Communication</Typography>
                            <Typography>We pride ourselves as being great communicators. You are never left in the dark, or left on read.</Typography>
                        </div>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Box style={columnStyle}>
                        <Box sx={iconContainerStyle}>
                            <Icon component={SchoolOutlinedIcon} style={iconStyle} />
                        </Box>
                        <div>
                            <Typography variant="h6" sx={{ fontSize: "16px", paddingBottom: "6px", fontWeight: "600" }}>Willingness To Teach</Typography>
                            <Typography>The real estate process can have a lot of moving parts, and can be intimidating. We give you the info to make sound real estate decisions.</Typography>
                        </div>
                    </Box>
                </Grid>




            </Grid>
        </Container>






    </>








    );
};

export default Expertise;
