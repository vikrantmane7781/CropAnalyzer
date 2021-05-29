import React, { useState } from 'react'
import { Button } from "@material-ui/core";
import Fade from "react-reveal/Fade"
import data from "./yourdata"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
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
export default function Fert() {
    const classes = useStyles();
    var separators = ["<br/>","</br>","</b>"];
    const [nitrogen, setNitrogen] = useState("");
    const [phosphorous, setPhosphorous] = useState("");
    const [pottasium, setPottasium] = useState("");
    const [cropName, setcropName] = useState("");
    const [fertData, setFertData] = useState("");

    const handlesubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${API}/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nitrogen,
                phosphorous,
                pottasium,
                cropName,
            }),
        });
        const abcd = await res.json();

        setFertData(abcd)


    }
    return (
        <div className="section" id="fert" >
             <br />
        <Fade bottom>
          <h3>{data.headerParagraph[1]}</h3>
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
                                className="Nitrogen"
                                onChange={(e) => setNitrogen(e.target.value)}
                                value={nitrogen}
                                required
                            />
                            <TextField 
                                label="Phosphorous"

                                type="number"
                                className="Phosphorous"
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
                                className="Pottasium"
                                onChange={(e) => setPottasium(e.target.value)}
                                value={pottasium}
                                required
                            />
                            <NativeSelect className="options" onChange={(e) => setcropName(e.target.value)}>
                                <option selected value="">Select Name</option>
                                <option vlue="rice">rice</option>
                                <option vlue="maize">maize</option>
                                <option vlue="chickpea">chickpea</option>
                                <option vlue="kidneybeans">kidneybeans</option>
                                <option vlue="pigeonpeas">pigeonpeas</option>
                                <option vlue="mothbeans">mothbeans</option>
                                <option vlue="mungbean">mungbean</option>
                                <option vlue="blackgram">blackgram</option>
                                <option vlue="lentil">lentil</option>
                                <option vlue="pomegranate">pomegranate</option>
                                <option vlue="banana">banana</option>
                                <option vlue="mango">mango</option>
                                <option vlue="grapes">grapes</option>
                                <option vlue="watermelon">watermelon</option>
                                <option vlue="muskmelon">muskmelon</option>
                                <option vlue="apple">apple</option>
                                <option vlue="orange">orange</option>
                                <option vlue="papaya">papaya</option>
                                <option vlue="coconut">coconut</option>
                                <option vlue="cotton">cotton</option>
                                <option vlue="jute">jute</option>
                                <option vlue="coffee">coffee</option>
                            </NativeSelect>
                        </div>
                        <br/>
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
          <div className="register__container2" style={{
                    maxWidth: "600px",
                    fontWeight: "700",
                    fontSize:"13px",
                    backgroundColor: "#ffff",
                    marginBottom:"20px",
                    padding:"20px 20px",
                    overflowY:"scroll",
                    overflowY: "hidden",
                   
                }}>
                    <br />
                    {fertData ?(fertData.split(new RegExp(separators.join('|'), 'g')).map((i, key) => {
                        return <p key={key} style={{
                            marginTop: "8px",

                        }}>{i}</p>;
                    })):(<h3>Wait for response</h3>) }
                        
                    

                    <br />
                </div>
                    </div>
          </Fade>
       </div>
    </div>
    <br />
    <br />
    </div>
    )
} 

 