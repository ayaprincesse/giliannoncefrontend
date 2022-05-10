import * as React from 'react';
import "../styles/CreerC.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";

import Footer1 from '../Footer';
import footerRoutes from "footer.routes";

const Signuppage = () => {
    return (
    <ThemeProvider theme={theme}>
    <Signupform />
    <Footer1 content={footerRoutes}/>
    </ThemeProvider>
    );
}
//<Signupform />
function Signupform() {
  return (
    <form align="center">
      <div className="form-inner">
        <h2>Créer un compte</h2>
        <div className="form-group">
          <label htmlFor="nom" class="labelfor">Nom:</label>
          <input type ="text" name="nom" id="nom"/>
        </div>
        <div className="form-group">
          <label htmlFor="prenom">Prénom:</label>
          <input type ="text" name="prenom" id="prenom"/>
        </div>
        <div className="form-group">
          <label htmlFor="login">Login:</label>
          <input type ="text" name="login" id="login"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input type ="email" name="email" id="email"/>
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Télephone:</label>
          <input type ="text" name="telephone" id="telephone"/>
        </div>
        <div className="form-group">
          <label htmlFor="mdp">Mot de passe:</label>
          <input type ="password" name="mdp" id="mdp"/>
        </div>
        <div className="form-group">
          <label htmlFor="mdp2">Confirmez le Mot de passe:</label>
          <input type ="password" name="mdp2" id="mdp2"/>
        </div>
        <input type="submit" value="S'INSCRIRE"/>

      </div>
      
    </form>     
  )
}


export default Signuppage;