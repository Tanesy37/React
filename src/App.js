import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Assuming Navbar is in the same folder
import Create from './components/create';      // Make sure Blog component is correctly imported
import Home from './components/Home';
import Blogdetails from './components/Blogdetails';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        {/* /blogs/:id just a path created not a file in components*/}
        <Route path="/blogs/:id" element={<Blogdetails />} />
        {/* the star (*) just mean if none of the routes work then use this like a catch error  */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router >
  );
}

export default App;
