import * as React from 'react';
import footerRoutes from "footer.routes";
import Footer1 from '../Footer';
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";
import { useState } from 'react';
import { Button } from '@mui/material';
const Aboutus = () => {
    return(<Button
        variant="contained"
        component="label"
      >
        Upload File
        <input
          type="file"
          hidden
        />
      </Button>);
}

function About() {
return(<h1>PAGE About</h1>);
}

export default Aboutus ;