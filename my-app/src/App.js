import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/About Us';
import Movies from './components/Movies/Movies';
import SingleMovie from './components/SingleMovie/SingleMovie';
import Contact from './components/Contact/Contact';
import TVShow from './components/TV Show/TV Show';
import Celebrities from './components/Celebrities/Celebrities';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Wishlist from './components/Wishlist/Wishlist';
import 'reset-css';
import './style.scss';

  function App() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<SingleMovie/>} />
          <Route path="/tvshow" element={<TVShow />} />
          <Route path="/celebrities" element={<Celebrities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
     </Routes>
    );
  }
export default App; 
