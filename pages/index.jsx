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
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-2" class="animate__animated animate__backInLeft">
        <Picture source="../static/pics/b.jpg" alt="Edward" deployed="https://edward-2.herokuapp.com/" />
      </div>
      <div className="col-md-2" class="animate__animated animate__backInUp">
        <Picture source="../static/pics/a.jpg" alt="Rain or Shine" deployed="https://khny258.github.io/Rain-or-Shine/" />
      </div>
      <div className="col-md-2" class="animate__animated animate__backInRight">
        <Picture source="../static/pics/c.jpg" alt="Timbr" deployed="https://khny258.github.io/Timbr/" />
      </div>
      <div className="col-md-2" class="animate__animated animate__backInRight">
        <Picture source="../static/pics/btc.png" alt="BTC" deployed="https://khny258.github.io/Bitcoin/" />
      </div>
      <div className="col-md-2"></div>
    </div>
    <Footer />
  </div>
);

export default Home;
