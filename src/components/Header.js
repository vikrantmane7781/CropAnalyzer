import Fade from "react-reveal/Fade"
import data from "./yourdata"

export default function Header() {
    return (
      <>
        <div className="section" id="home" style={{marginTop:"60px"}}>
        
      <div className="container">
        <div className="header-wrapper">
          
          <Fade bottom cascade>
            <div className="heading-wrapper">
            
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h1>
              <br />
              <h2>
              {data.name}{" "}
              <span role="img" aria-label="Emoji">
                📡
              </span>
            </h2>
              <h3>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"}
              </h3>
             
              <h5>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and experience"}
              </h5>
              <h6>
                {" "}
                {data.headerTagline[3]
                  ? data.headerTagline[3]
                  : "and experience"}
              </h6>
              <h6>
                {" "}
                {data.headerTagline[4]
                  ? data.headerTagline[4]
                  : "and experience"}
              </h6>
            </div>
          </Fade>
         

        </div>
      </div>
      <br /><br />
      
    </div>
    </>
    )
}

 
