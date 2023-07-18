import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import teamImg from "../../images/home/teamImg.svg"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Team = () => {
    return (
        <Container sx={{ marginTop: '50px' }}>

            <Box
                sx={{
                    width: '100%',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >

                {/* Right Section */}
                <Box sx={{ flex: 1, display: 'flex', justifyContent: { xs: 'center', md: 'center' } }}>
                    <img src={teamImg} alt="Team" style={{ maxWidth: '100%', height: 'auto', transform: 'scale(1.05)' }} />
                </Box>

                {/* Left Section */}
                <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="h2" component="p" sx={{ fontSize: '14px', color: 'black', fontWeight: '800' }}>
                        Smooth Real Estate Transactions
                    </Typography>
                    <Typography
                        variant="h2"
                        component="p"
                        sx={{ padding: '8px 0', fontSize: '2.25rem', color: 'black', opacity: '0.87', fontWeight: '700' }}
                    >
                        Our Office Staff Is Dedicated To <span style={{ color: 'rgb(99,111,118)' }}>Smooth </span>Real Estate Transactions
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ fontSize: '15px', color: '#242424', fontWeight: 600, width: { xs: '100%', md: '450px' }, padding: "8px 0" }}>
                        We not only have have residential, commercial, and land specialists walking you through the deal, we have a full office staff working together with our Realtors.
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="body1" component="p" sx={{ fontSize: '1.10rem', color: '#636F76', fontWeight: '600', width: { xs: '100%', md: '450px' }, paddingLeft: '16px', borderLeft: "8px solid #52898a" }}>
                        More eyes on the deal means fewer mistakes, and efficient execution of the nitty gritty details.
                    </Typography>

                </Box>


            </Box>
        </Container>
    );
};

export default Team;

