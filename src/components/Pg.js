import React from 'react'

function Pg({height}) {
    return (
        
        <div className="progressSection" style={{
            position:"fixed",
            right:"5px",
            top:"40%",
            width:"30px",
            height:"40%",
            display:"flex",
            justifyContent:"space-between",
            willChange:"transform",
            transition:".3s ease-out",
          }}>
              
            <div className="progressBar" style={{
              position:"relative",
              width:"3px",
              
              border:"1px solid black",
              borderRadius:"20px",
              overflow:"hidden",
              backgroundColor:"rgb(70,70,70)",
            }}>
              <div className="bar" style={{
               
                bottom:"0",
                width:"100%",
                
                height:"0%",
                height:`${height}`,
                backgroundColor:"rgb(189,189,189)",
                scrollBehavior:"smooth"
              }}>
    
              </div>
    
            </div>
            <div className="progressHeading" style={{
                fontWeight:"bold",
                fontSize:"13px",
                writingMode: "vertical-rl", 
            }}>Scroll Down     {height}</div>
          </div>
    )
}

export default Pg
