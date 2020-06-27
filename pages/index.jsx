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
      <div className="col-md-6">
        <Picture source="../static/pics/a.jpg" alt="Rain or Shine" deployed="https://khny258.github.io/Rain-or-Shine/" />
      </div>
      <div className="col-md-6">
        <Picture source="../static/pics/16608.jpg" alt="Timbr" deployed="https://khny258.github.io/Timbr/" />
      </div>
      <div className="col-md-6">
        <Picture source="../static/pics/project-3.jpg" alt="Note Taker" deployed="https://github.com/khny258/Note-Taker/" />
      </div>
    </div>
    {/* <h3 className="frontend">Front End Websites</h3>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <Picture source="../static/pics/reactPortfolio.png" alt="portfolio" github="https://github.com/khny258/React-Portfolio" deployed="https://kennyhuang.herokuapp.com/" />
      </div>
      <div className="col-md-6">
        <Picture source="../static/pics/FaceYourself.png" alt="faceyourself" github="https://github.com/khny258/React-Portfolio" deployed="https://kennyhuang.herokuapp.com/" />
      </div>
    </div> */}
    {/* <h3 className="backend">CLI Applications</h3>
    <hr />
    <div className="row">
      <div className="col-md-4">
        <Picture source="../static/pics/bash.png" alt="liri" github="https://github.com/khny258/React-Portfolio" />
      </div>
      <div className="col-md-4">
        <Picture source="../static/pics/csharp-copy.png" alt="hangman" github="https://github.com/khny258/React-Portfolio" />
      </div>
      <div className="col-md-4">
        <Picture source="../static/pics/csharp-delete.png" alt="hangman" github="https://github.com/khny258/React-Portfolio" />
      </div>
    </div> */}
    <Footer />
  </div>
);

export default Home;
