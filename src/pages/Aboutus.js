import * as React from 'react';
import footerRoutes from "footer.routes";
import Footer1 from '../Footer';
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";

const Aboutus = () => {
    return (
    <ThemeProvider theme={theme}>
    <About />
    <Footer1 content={footerRoutes}/>
    </ThemeProvider>
    );
}

function About() {
return(<h1>PAGE About</h1>);
}

export default Aboutus ;