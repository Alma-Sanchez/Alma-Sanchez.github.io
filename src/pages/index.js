import React from "react";
import ig from "../img/IG/sm-icons-instagram-glyph-logo.png";
import linkedin from "../img/LinkedIn/linkedinLogo.png";
import github from "../img/GitHub-Mark/GitHub-Mark-32px.png";
import twitch from "../img/GitHub-Mark/GitHub-Mark-32px.png";

export default function Home() {

  return <div>
    Alma's Portfolio

    <div className="intro">
      My name is Alma, I'm a first generation college graduate with a BS in Computer Science from American University. I love working with JavaScript and learning more about UI/UX in order to provide a pleasant experience when creating websites.
    
      Some of my hobbies include calligraphy, drawing, exploring new music and watching organization/lifestyle videos on youtube.

    </div>


    <footer>
    <div className="socials">
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
      
      &copy; 2021 Alma Sanchez
    </footer>

  </div>
}
