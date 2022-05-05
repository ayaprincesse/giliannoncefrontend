import * as React from 'react';
import Container from '@mui/material/Container';
import MKTypography from "components/MKTypography";
import MKBox from 'components/MKBox';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import MKButton from 'components/MKButton';

const Header1 = function() {

  
    return (
        <MKBox component="header" position="relative" bgColor="white" pb="30px" >
          <MKBox component="nav" position="relative" top="0.5rem" width="100%" bgColor="white">
               <Container>
                 <Grid container flexDirection="row" alignItems="center">
                    <MKTypography
                        component={Link}
                        href="#"
                        variant="button"
                        color="#484848"
                        fontWeight="regular"
                        py={0.8125}
                        mr={2}
                    >
                     GILI.COM
                    </MKTypography>
                   
                   <MKBox
                    component="ul"
                    display={{ xs: "none", lg: "flex" }}
                    p={0}
                    my={0}
                    mx="auto"
                    sx={{ listStyle: "none" }}
                >
                    <MKBox component="li">
                    <MKTypography
                        component={Link}
                        href="#"
                        variant="button"
                        color="#484848"
                        fontWeight="regular"
                        p={1}
                        onClick={(e) => e.preventDefault()}
                    >
                        Accueil
                    </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                    <MKTypography
                        component={Link}
                        href="#"
                        variant="button"
                        color="#484848"
                        fontWeight="regular"
                        p={1}
                        onClick={(e) => e.preventDefault()}
                    >
                        Poster une Annonce
                    </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                    <MKTypography
                        component={Link}
                        href="#"
                        variant="button"
                        color="#484848"
                        fontWeight="regular"
                        p={1}
                        onClick={(e) => e.preventDefault()}
                    >
                        Contactez nous
                    </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                    <MKTypography
                        component={Link}
                        href="#"
                        variant="button"
                        color="#484848"
                        fontWeight="regular"
                        p={1}
                        onClick={(e) => e.preventDefault()}
                    >
                        S'authentifier
                    </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                    <MKTypography
                        component={Link}
                        href="#"
                        variant="button"
                        color="#484848"
                        fontWeight="regular"
                        p={1}
                        onClick={(e) => e.preventDefault()}
                    >
                        Inscrivez-vous
                    </MKTypography>
                    </MKBox>
                
            </MKBox>
            <MKBox
                component="ul"
                display={{ xs: "none", lg: "flex" }}
                p={0}
                m={0}
                sx={{ listStyle: "none" }}
              >
                <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="i" color="white" className="fab fa-twitter" />
                  </MKTypography>
                </MKBox>
                <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="i" color="white" className="fab fa-facebook" />
                  </MKTypography>
                </MKBox>
                <MKBox component="li">
                  <MKTypography
                    component={Link}
                    href="#"
                    variant="button"
                    p={1}
                    onClick={(e) => e.preventDefault()}
                  >
                    <MKBox component="i" color="white" className="fab fa-instagram" />
                  </MKTypography>
                </MKBox>
                </MKBox>
                </Grid>
            </Container>
        </MKBox>
       
    </MKBox>
    );
}

export default Header1;