
// import About component
// import ContactUs component
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signuppage from "./pages/Signup";
import AnnonceDetails from 'pages/AnnonceDetails';
import Contact from 'pages/Contact';
import Loginpage from 'pages/Login';
import Aboutus from 'pages/Aboutus';
import SignIn2 from 'pages/SignIn2';
import SignUp2 from 'pages/SignUp2';
import ResultatRecherche from 'pages/ResultatRecherche';
//import CreerC from "./pages/creercompte";

import {BrowserRouter as Router, Route, Routes , useLocation} from "react-router-dom";
import { useLayoutEffect } from 'react'

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 
function App() {
  
  return (
    <div>
      
  <div className="App">
    <Router >
       {/* we want the navbar to show up in every single page thats why we put it outside the Routes component*/}   
       <Wrapper>
      <Navbar />
      <Routes>
        <Route  index  element={<Home />}/>
        <Route  path="/Signuppage"  element={<Signuppage />}/>
        <Route  path="/AnnonceDetails/:annonceid"  element={<AnnonceDetails />}/>
        <Route  path="/Contact"  element={<Contact />}/>
        <Route  path="/Loginpage"  element={<Loginpage />}/>
        <Route  path="/Aboutus"  element={<Aboutus />}/>
        <Route  path="/SignIn2"  element={<SignIn2 />}/>
        <Route  path="/SignUp2"  element={<SignUp2 />}/>
        <Route  path="/ResultatRecherche"  element={<ResultatRecherche />}/>
      </Routes>
      </Wrapper>
    </Router>
    
    </div>
    </div>
    );
    }


export default App;
