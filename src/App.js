import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>This is homepage</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

function App() {
  return (
    <div>
      <h1>Welcome to React Router</h1>
      <BrowserRouter>
        <Link to="/" className="link">Home</Link>{''}
        <Link to="/about" className="link">About</Link>{''}
        <Link to="/contact" className="link">Contact</Link>{''}
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/contact" element = {<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
