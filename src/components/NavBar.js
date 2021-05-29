import React,{useRef} from 'react'
import Fade from "react-reveal/Fade"
import scrollTo from 'gatsby-plugin-smoothscroll';

export default function NavBar() {

    return (
      <>
      <br />
<div className="section" id="top" >
      <div className="container">
        <div className="navbar-wrapper">
        <Fade bottom>
          <div
            role="button"
            className="name"
          >
            CROP ANALYZER.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#top")}>Home</button>
            <button onClick={() => scrollTo("#crop")}>Crop Analysis</button>
            <button onClick={() => scrollTo("#fert")}>Fertilizare suug.</button>
          </div>
          </Fade>
        </div>
      </div>
      
    </div>
    </>
    )
}

 
