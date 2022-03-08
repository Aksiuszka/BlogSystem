import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './App';
import About from './views/About/About';
import BlogPage from './views/BlogPage/BlogPosts';
import Contact from './views/Contact/Contact';
import ErrorPage from './views/ErrorPage/Error';
import NewPost from './views/ErrorPage/Error';

function Routing() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/errorp" element={<ErrorPage />} />
        <Route path="/newpost" element={<NewPost />} />       
        </Routes>
    </Router>
  )
}

export default Routing