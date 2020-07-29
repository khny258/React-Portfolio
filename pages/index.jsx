import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Picture from '../components/picture';
import Footer from '../components/footer';
import '../static/css/pages.css';

const Home = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="Hello, I'm Kenny Huang, a Full Stack Developer" subtitle="from Brooklyn, NY" />
    <h3>My Projects</h3>
    <hr />

    <p><Picture source="../static/pics/Edward.png" alt="Edward" deployed="https://edward-2.herokuapp.com/" /></p>

    <p><Picture source="../static/pics/a.jpg" alt="Rain or Shine" deployed="https://khny258.github.io/Rain-or-Shine/" /></p>

    <p><Picture source="../static/pics/16608.jpg" alt="Timbr" deployed="https://khny258.github.io/Timbr/" /></p>

    <Footer />
  </div>
);

export default Home;
