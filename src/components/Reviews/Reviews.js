import React from 'react';
import { Grid, Box, Typography, Rating } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';




const boxStyles = {
    width: '84%',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
};

const Reviews = () => {
    return (
        <Grid container spacing={2} width="86%" margin="50px auto">
            <Grid item xs={12} sm={4}>
                <Box sx={boxStyles}>
                    <Box display="flex" justifyContent="space-between" flexDirection="row">


                        <Box>
                            <Typography variant="h6" component="div" sx={{ ml: 1, fontSize: "18px", fontWeight: "bold", marginLeft: "0" }}>
                                Adrienne Truelove
                            </Typography>

                            <Box sx={{ flexGrow: 1 }} />

                            <Rating name="user-rating" value={5} readOnly size="small" sx={{ opacity: "0.7" }} />
                        </Box>
                        <Box>
                            <GoogleIcon />
                        </Box>

                    </Box>
                    <Typography variant="body1" sx={{ fontSize: "1.125rem", paddingTop: "8px", fontWeight: "500", color: "black" }}>
                        An exceptional Real Estate firm.
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Box sx={boxStyles}>
                    <Box display="flex" justifyContent="space-between" flexDirection="row">


                        <Box>
                            <Typography variant="h6" component="div" sx={{ ml: 1, fontSize: "18px", fontWeight: "bold", marginLeft: "0" }}>
                                Quinn McColly
                            </Typography>

                            <Box sx={{ flexGrow: 1 }} />

                            <Rating name="user-rating" value={5} readOnly size="small" sx={{ opacity: "0.7" }} />
                        </Box>
                        <Box>
                            <FacebookIcon />
                        </Box>

                    </Box>
                    <Typography variant="body1" sx={{ fontSize: "1.125rem", paddingTop: "8px", fontWeight: "500", color: "black" }}>
                        Gomez Properties clearly provides its agents the resources they need to deliver a smooth transaction for their clients.
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Box sx={boxStyles}>
                    <Box display="flex" justifyContent="space-between" flexDirection="row">


                        <Box>
                            <Typography variant="h6" component="div" sx={{ ml: 1, fontSize: "18px", fontWeight: "bold", marginLeft: "0" }}>
                                John Vickers
                            </Typography>

                            <Box sx={{ flexGrow: 1 }} />

                            <Rating name="user-rating" value={5} readOnly size="small" sx={{ opacity: "0.7" }} />
                        </Box>
                        <Box>
                            <GoogleIcon />
                        </Box>

                    </Box>
                    <Typography variant="body1" sx={{ fontSize: "1.125rem", paddingTop: "8px", fontWeight: "500", color: "black" }}>
                        Rick and his team of Realtors are all great to work with! True professionals.
                    </Typography>
                </Box>
            </Grid>


       
        </Grid>
    );
};

export default Reviews;




