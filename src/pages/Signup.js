import * as React from 'react';
import Header1 from 'Header';
import Footer1 from 'Footer';
import footerRoutes from "footer.routes";

import CssBaseline from '@mui/material/CssBaseline';
import MKBox from 'components/MKBox';

import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";

const Signuppage = () => {
    return (
     <ThemeProvider theme={theme}>
    <CssBaseline />
    <Signupform/>
    <MKBox pt={5} px={1} bgColor="white">
    <Footer1 content={footerRoutes}/> 
    </MKBox>
    </ThemeProvider>
    );
    
    
}

function Signupform() {
  return ( <p><h1>HELLO SIGN UP FORM</h1>
  <h1>HELLO SIGN UP FORM</h1>
  <h1>HELLO SIGN UP FORM</h1>
  <h1>HELLO SIGN UP FORM</h1>
  <h1>HELLO SIGN UP FORM</h1>  </p>
    );
}

export default Signuppage;