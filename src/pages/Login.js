import * as React from 'react';
import "../styles/CreerC.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";
import {Link} from "react-router-dom";
import Footer1 from '../Footer';
import footerRoutes from "footer.routes";

const Loginpage = () => {
    return (
    <ThemeProvider theme={theme}>
    <Loginform />
    <Footer1 content={footerRoutes}/>
    </ThemeProvider>
    );
}

function Loginform() {
  return (
    <form align="center">
      <div className="form-inner">
        <h2>Authentification</h2>
        <div className="form-group">
          <label htmlFor="login">Login:</label>
          <input type ="text" name="login" id="login"/>
        </div>
        <div className="form-group">
          <label htmlFor="mdp">Mot de passe:</label>
          <input type ="password" name="mdp" id="mdp"/>
        </div>
        <input type="submit" value="OK"/>

      </div>
      <Link to ="/Signuppage">Vous n'avez pas encore de compte. Créez en un</Link>
    </form>     
  )
}


export default Loginpage;