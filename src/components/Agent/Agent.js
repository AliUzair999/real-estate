import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import agentImg from "../../images/home/agent.jpg"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Agent = () => {
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
                {/* Left Section */}
                <Box sx={{ flex: 1, marginLeft: { xs: '0', md: '10px' }, textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="h2" component="p" sx={{ fontSize: '14px', color: 'black', opacity: '0.65', fontWeight: '900' }}>
                        Hard Working Agents
                    </Typography>
                    <Typography
                        variant="h2"
                        component="p"
                        sx={{ padding: '8px 0', fontSize: '2.25rem', color: 'black', opacity: '0.87', fontWeight: '700' }}
                    >
                        Real Estate Is <span style={{ color: 'rgb(99,111,118)' }}>Simple</span> With A Gomez Properties Real Estate Professional
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ fontSize: '15px', color: 'black', fontWeight: '600', width: { xs: '100%', md: '450px' } }}>
                        We have been helping Coastal Bend Families Buy and Sell Real Estate for over 15 years. We would love to serve you too.
                    </Typography>
                    <Typography variant="h2" component="p" sx={{ marginTop: '40px', fontSize: '1rem', color: 'black', opacity: '0.87', fontWeight: '700' }}>
                        Connect With Us
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ fontSize: '.875rem', color: 'black', fontWeight: '500', width: { xs: '100%', md: '450px' } }}>
                        We have Residential, Commercial, and Rental specialists ready to walk you through the process, no matter your needs.
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <Typography variant="body1" component="p" sx={{ fontWeight: 'bold' }}>
                            Find An Agent
                        </Typography>
                        <ArrowRightAltIcon />
                    </Box>
                </Box>

                {/* Right Section */}
                <Box sx={{ flex: 1, display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                    <img src={agentImg} alt="Image" style={{ maxWidth: '100%', height: 'auto' }} />
                </Box>
            </Box>
        </Container>
    );
};

export default Agent;

