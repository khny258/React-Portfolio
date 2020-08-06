import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Card from '../components/card';
import Footer from '../components/footer';
import '../static/css/pages.css';

const App = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="Let's connect." subtitle="I prefer emails and phone calls." />
    <hr />
    <div className="row">
      <div className="col contactCol">
        <Card source="../static/pics/gmail.png" text={<a href="mailto:khny258@gmail.com" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">Email Me</button></a>} />
        <Card source="../static/pics/phone.png" text={<a href="tel:1-917-345-6723" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">Call Me</button></a>} />
        <Card source="../static/pics/resume.png" text={<a href="https://drive.google.com/file/d/1MnD4lMSNt00KG49CReBn8z5JhNwJW0Eu/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">Resume</button></a>} />
        <Card source="../static/pics/github.png" text={<a href="https://github.com/khny258" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">GitHub</button></a>} />
        <Card source="../static/pics/linkedin.png" text={<a href="https://www.linkedin.com/in/huangkenny/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">LinkedIn</button></a>} />

      </div>
    </div>
    <Footer />
  </div>
);

export default App;
