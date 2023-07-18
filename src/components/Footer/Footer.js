
import { Box, Container, Typography, Grid } from '@mui/material';
import BlackLogo from '../../images/navlogoblack.svg'
import { hover } from '@testing-library/user-event/dist/hover';

const Footer = () => {
    const headingStyle = {
        fontSize: "16px",
        color: "black",
        fontWeight: "700",
        marginBottom: '8px',
    }

    const linkingStyle = {
        fontSize: "16px",
        color: "black",
        fontWeight: "700",
        margin: '1rem 0',
        opacity: "0.75",
        listStyleType: "none",
        '&:hover': {
            color: '#c0c0c0',
            cursor: "pointer",
        },
    }

    return (<>
        <hr style={{ marginBottom: '50px', opacity: "0.45" }} />

        <Container component="footer" sx={{ padding: '20px 0', }}>
            <Grid container spacing={2} justifyContent="center">
                {/* Column 1 */}
                <Grid item xs={12} sm={6} md={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: "100%" }}>
                        {/* Place your logo component here */}
                        <img src={BlackLogo} alt="Logo" style={{ height: '50px', width: 'auto', transform: "scale(0.8)" }} />
                    </Box>
                </Grid>

                {/* Column 2 */}
                <Grid item xs={6} sm={3} md={2}>
                    <Typography variant="subtitle1" component='h6' sx={headingStyle}>Services</Typography>
                    <Typography variant="body2" component="li" sx={linkingStyle}>Browse For Sale</Typography>
                    <Typography variant="body2" component="li" sx={linkingStyle}>Browse Rentals</Typography>
                    <Typography variant="body2" component="li" sx={linkingStyle}>List Your Property</Typography>


                </Grid>

                {/* Column 3 */}
                <Grid item xs={6} sm={3} md={2}>
                    <Typography variant="subtitle1" component='h6' sx={headingStyle}>Company</Typography>
                    <Typography variant="body2" component="li" sx={linkingStyle}>Our Team</Typography>
                    <Typography variant="body2" component="li" sx={linkingStyle}>Careers </Typography>
                    <Typography variant="body2" component="li" sx={linkingStyle}>FAQ</Typography>
                </Grid>

                {/* Column 4 */}
                <Grid item xs={6} sm={3} md={2}>
                    <Typography variant="subtitle1" component='h6' sx={headingStyle}>Learn </Typography>
                    <Typography variant="body2" component="li" sx={linkingStyle}>Buyers Guide</Typography>
                    <Typography variant="body2" component="li" sx={linkingStyle}>Sellers Guide</Typography>
                    <Typography variant="body2" component="li" sx={linkingStyle}>Mortgage Calculator</Typography>
                </Grid>

                {/* Column 5 */}
                <Grid item xs={6} sm={3} md={2}>
                    <Typography variant="subtitle1" component='h6' sx={headingStyle}>Legal</Typography>
                    <Typography variant="body2" component="li" sx={linkingStyle}>IABS </Typography>
                    <Typography variant="body2" component="li" sx={linkingStyle}>Consumer Protection</Typography>
                    <Typography variant="body2" component="li" sx={linkingStyle}>Terms of Use</Typography>
                </Grid>
            </Grid>
        </Container>

        <hr style={{ margin: '0 auto 20px auto', opacity: "0.45", width: "80%", }} />
        <div style={{ textAlign: "center", marginBottom: "30px", alignItems:"center" }}>
            <Typography variant='text1' component='p' sx={{ fontSize: "12px", color: '#333333', textAlign: "center" }} >
                Gomez Properties © 2022
            </Typography>
        </div>
    </>

    );
};

export default Footer;
