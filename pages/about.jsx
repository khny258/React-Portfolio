import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Footer from '../components/footer';
import IconImage from '../components/iconImage';
import '../static/css/pages.css';

const App = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="About Me." subtitle="The story of my transition from Wall St. to web development." />
    <h3>My Story</h3>
    <hr />
    <div className="row">
      <div className="col-md-6 aboutSections">
        <img className="profilePic profilePic1" src="../static/pics/about.jpg" alt="profilepic" />
      </div>
      <div className="col-md-6 aboutSections">
        <h4 className="bio bio1">
        <p>Full Stack Developer leveraging my 10+ years of experience in the finance industry to build useful applications and exciting things that will directly impact and change lives. After several years in Finance, I realized I had a love for coding so I enrolled in Columbia University where I became proficient in JavaScript, CSS, responsive web design, APIs, MERN Stack (MongoDB, Express.js, React.js, Node.js), and MySQL.</p>
        
        <p>I can develop innovative applications such as a group project called Edward, a smarter version of the SEC’s EDGAR system, made with React, Puppeteer/Cheerio for scraping data, and React-VIS for charting data. My technical skills combined with my experience in collaborative, deadline-driven environments make me a strong addition to any web development team.</p>
        </h4>
      </div>
    </div>
    <h3 className="skills">My Skills</h3>
    <hr />
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col-sm-12">
            <IconImage source="../static/pics/html.png" alt="html" width="25%" height="25%" />
            <IconImage source="../static/pics/css.png" alt="css" width="25%" height="25%" />
            <IconImage source="../static/pics/bootstrap.png" alt="bootstrap" width="25%" height="25%" />
            <IconImage source="../static/pics/javascript.png" alt="javascript" width="25%" height="25%" />
            <IconImage source="../static/pics/handlebars.png" alt="handlebars" width="25%" height="25%" />
            <IconImage source="../static/pics/jquery.png" alt="jquery" width="25%" height="25%" />
            <IconImage source="../static/pics/githubIcon.png" alt="github" width="25%" height="25%" /> 
            <IconImage source="../static/pics/mern.jpg" alt="mern" width="25%" height="25%" />
            <IconImage source="../static/pics/mongodb.png" alt="mongodb" width="25%" height="25%" />
            <IconImage source="../static/pics/mysql.png" alt="mysql" width="25%" height="25%" />
            <IconImage source="../static/pics/nodejs.png" alt="node" width="25%" height="25%" />
            <IconImage source="../static/pics/React.png" alt="react" width="25%" height="25%" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
