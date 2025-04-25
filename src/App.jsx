import React from 'react';
import './App.css'
import NavigationBar from './components/NavBar';
import Home from './pages/Home';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Experience from './pages/Experience';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

function App() {
  return( 
  <BrowserRouter>
  <NavigationBar/>
   <Routes>
 <Route path="" element={<Home />}/>
 <Route path="skills" element={<Skills />}/>
 <Route path="experience" element={<Experience />}/>
 <Route path="project" element={<Project />}/>
 <Route path="certificates" element={<Certificates />}/>
 <Route path="contact" element={<Contact />}/>
  </Routes> 
  </BrowserRouter> 
 
  );
 
}

export default App;