import React, { useState } from 'react'
import { Button } from "@material-ui/core";
import Fade from "react-reveal/Fade"
import data from "./yourdata"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
 
//env
const API = process.env.REACT_APP_API;

export default function Crop() {
    const classes = useStyles();

    const [nitrogen, setNitrogen] = useState("");
    const [phosphorous, setPhosphorous] = useState("");
    const [pottasium, setPottasium] = useState("");
    const [ph, setPh] = useState("");
    const [rainfall, setRainfall] = useState("");

    const [city, setCity] = useState("");


    const [cropData, setcropData] = useState("")
    const handlesubmit = async (e) => {
        e.preventDefault();
        //console.log(nitrogen, phosphorous);

        const res = await fetch(`${API}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nitrogen,
                phosphorous,
                pottasium,
                ph,
                rainfall,

                city,
            }),
        });
        const abc = await res.json();
        setcropData(abc)
        console.log(abc)

        setNitrogen("")
        setPhosphorous("")
        setPottasium("")
        setPh("")
        setRainfall("")

        setCity("")
    }

    return (
        
        <div className="section" id="crop">
            
            <Fade bottom >
              <h3>{data.headerParagraph[0]}</h3>
            </Fade>
      <div className="container">
        <div className="about-section">
          <div className="content">
          <Fade bottom cascade>
            <p>
              
            <form className={classes.root} onSubmit={handlesubmit} autoComplete="off">
                        <div className="row1">
                            <TextField  
                                label="Nitrogen"
                                type="number"
                                
                                onChange={(e) => setNitrogen(e.target.value)}
                                value={nitrogen}
                                required
                            />
                            <TextField   
                                label="Phosphorous"
                                type="number"
                                onChange={(e) => setPhosphorous(e.target.value)}
                                value={phosphorous}
                                required
                            />
                        </div>
                        <br />
                        <div className="row2">
                                <TextField   
                                label="Pottasium"
                                type="number"
                                onChange={(e) => setPottasium(e.target.value)}
                                value={pottasium}
                                required
                            />
                            <TextField  
                            label="Phosphorous"
                            type="number"
                                onChange={(e) => setPh(e.target.value)}
                                value={ph}
                                required
                            />
                        </div>
                        <br />
                        <div className="row3">
                            <TextField  
                                label="Rainfall"
                                type="number"
                                onChange={(e) => setRainfall(e.target.value)}
                                value={rainfall}
                                required
                            />
                            <TextField  
                            label="City"
                            type="text"
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                            required
                        />
                        </div>
                        <br />
                      
                        <center>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"

                                className="register__register"
                                type="submit"
                            >Submit </Button>
                        </center>
                        <br />

                    </form>
            </p>
            </Fade>
          </div>
          <Fade bottom>
          <div className="image-wrapper">
          <h3 style={{
                        marginTop: "80px",
                        marginBottom: "250px",
                    }}>You should grow " {cropData} " in your farm</h3>
          </div>
          </Fade>
        </div>
      </div>
    </div>
    )
}


