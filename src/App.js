
// import About component
// import ContactUs component
import React,{useEffect,useState} from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ModifierCompte from './pages/pagesuser/ModifierCompte';
import AnnonceDetails from 'pages/AnnonceDetails';
import DetailsAnnonce from 'pages/pagesuser/DetailsAnnonce';
import Contact from 'pages/Contact';
import Aboutus from 'pages/Aboutus';
import SignIn2 from 'pages/SignIn2';
import SignUp2 from 'pages/SignUp2';
import ResultatRecherche from 'pages/ResultatRecherche';
import EspaceUser from 'pages/pagesuser/EspaceUser';
import FormSignal from "./pages/FormSignal";
import {BrowserRouter as Router, Route, Routes , useLocation} from "react-router-dom";
import { useLayoutEffect } from 'react'
import Navbar2 from 'components/Navbar2';
import Navbar3 from 'components/Navbar3';
import MesAnnonces from 'pages/pagesuser/MesAnnonces'
import CreerAnnonce from 'pages/CreerAnnonce';
const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 
function App() {
  
  const [isUserLogged, setIsUserLogged] = useState(false);
  useEffect(() => {
    if(localStorage.getItem('token')!="" && localStorage.getItem('userID')!=""){
      setIsUserLogged(true);
		}
	}, [])
  
 
  /*const testerconn=()=>{
    if(localStorage.getItem('token')=="" || localStorage.getItem('userID')==""){
		  return (<Navbar/>)
		}
    else {
      console.log(localStorage.getItem('token'))
      console.log(localStorage.getItem('userID'))
      return (<Navbar3/>);
    }
      
  }*/
	
  return (
    <div>
      
  <div className="App">
    <Router >
       {/* we want the navbar to show up in every single page thats why we put it outside the Routes component*/}   
       <Wrapper>
      {/*testerconn()*/}
      {isUserLogged==false ? <Navbar/> : <Navbar3 isUserLoggedChange={setIsUserLogged}/>}
      <Routes>
        <Route  index  element={<Home />}/>
        <Route  path="/AnnonceDetails/:annonceid"  element={<AnnonceDetails />}/>
        <Route  path="/Contact"  element={<Contact />}/>
        <Route  path="/Aboutus"  element={<Aboutus />}/>
        <Route  path="/SignIn2"  element={<SignIn2 />}/>
        <Route  path="/SignUp2"  element={<SignUp2 />}/>
        <Route  path="/ResultatRecherche/:categorienom"  element={<ResultatRecherche />}/>
        <Route  path="/EspaceUser"  element={<EspaceUser isUserLoggedChange={setIsUserLogged} />}/>
        <Route path="/ModifierCompte" element={<ModifierCompte/>}/>
        <Route  path="/DetailsAnnonce/:annonceid"  element={<DetailsAnnonce />}/>
        <Route path="/FormSignal" element={<FormSignal/>}/>
        <Route path="/MesAnnonces" element={<MesAnnonces/>}/>
        <Route path="/CreerAnnonce" element={<CreerAnnonce/>}/>
      </Routes>
      </Wrapper>
    </Router>
    
    </div>
    </div>
    );
    }


export default App;
