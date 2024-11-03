



import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './layouts/home';
import About from './layouts/about';
import Services from './layouts/services';
import Contact from './layouts/contact';
import PageNotfound from './layouts/pageNotfound';
import Appointment from './layouts/appointment';


const Bloglazy = lazy(() => import('./layouts/blog'));

function App() {
  return (
    <>
     
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Bloglazy />} />
          <Route path='/appointment' element={<Appointment/>}/>
          <Route path="*" element={<PageNotfound />} />
         
        </Routes>
      </Suspense>
    </>
  );
}

export default App;


