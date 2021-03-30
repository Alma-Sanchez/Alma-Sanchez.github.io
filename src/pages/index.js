import React from "react";
import ig from "../img/instagram-glyph-logo.png";
import linkedin from "../img/linkedin.png";
import github from "../img/GitHub-Mark-32px.png";
import twitch from "../img/twitch.png";
import resume from "../img/Alma_Sanchez_Resume_2021.pdf";

export default function Home() {

  return <div>
    <nav>
      <div>Alma Sanchez </div>
      <div>
        <ul>
          <li>About</li>
          <li>Resume</li>
          <li>Contact</li>
      </ul>
      </div>
    </nav>

    <div className="intro content">
      <h1>About Me</h1>
      My name is Alma, I'm a first generation college graduate with a BS in Computer Science from American University. I love working with JavaScript and learning more about UI/UX in order to provide a pleasant experience when creating websites.
    
      Some of my hobbies include calligraphy, drawing, exploring new music and watching organization/lifestyle videos on youtube.
    </div>

    <div className="intro content">
      <h1>Experience</h1>
    
      <iframe src={resume} frameBorder="0"></iframe>
      
    </div>


    <div className="socials content">
      <h1>Contact Me</h1>
      <a href="https://www.instagram.com/_mastering_my_creativity_/" target="_blank" rel="noopener noreferrer" >
        <img src={ig} height="32px" alt="ig badge linking to www.instagram.com/_mastering_my_creativity_/" />
      </a>

      <a href="https://www.github.com/alma-sanchez/" target="_blank" rel="noopener noreferrer" >
        <img src={github} alt="github logo linking to my homepage at " />
      </a> 

      <a href="https://www.linkedin.com/in/almaysanchez/" target="_blank" rel="noopener noreferrer" >
        <img src={linkedin} alt="linkedin badge linking to www.linkedin.com/in/almaysanchez/" />
      </a>

      <a href="https://www.twitch.tv/msgiggleshits" target="_blank" rel="noopener noreferrer" >
        <img src={twitch} alt="linkedin badge linking to www.linkedin.com/in/almaysanchez/" />
      </a>
    </div>

    <footer className="content">      
      &copy; 2021 Alma Sanchez
    </footer>

  </div>
}
