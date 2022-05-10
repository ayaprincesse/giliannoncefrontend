
// import About component
// import ContactUs component
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signuppage from "./pages/Signup";
import AnnonceDetails from 'pages/AnnonceDetails';
//import CreerC from "./pages/creercompte";

import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div>
      
  <div className="App">
    <Router>
       {/* we want the navbar to show up in every single page thats why we put it outside the Routes component*/}   
      <Navbar />
      <Routes>
        <Route  index  element={<Home />}/>
        <Route  path="/Signuppage"  element={<Signuppage />}/>
        <Route  path="/AnnonceDetails"  element={<AnnonceDetails />}/>
      </Routes>
    </Router>
    
    </div>
    </div>
    );
    }

export default App;
