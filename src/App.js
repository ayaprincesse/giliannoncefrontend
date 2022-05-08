
// import About component
// import ContactUs component
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signuppage from "./pages/Signup";
//import CreerC from "./pages/creercompte";

import {BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
  <div className="App">
    <Router>
       {/* we want the navbar to show up in every single page thats why we put it outside the Routes component*/}   
      <Navbar />
      <Routes>
        <Route  index  element={<Home />}/>
        <Route  path="/Signuppage"  element={<Signuppage />}/>
      </Routes>
    </Router>
    
    </div>
    );
    }

export default App;