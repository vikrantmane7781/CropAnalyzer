
import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Header from './components/Header'
import Crop from './components/Crop'
import Particles from 'react-particles-js';

import partic from './components/Particles';
import Animate from 'react-smooth';
import Fert from './components/Fert';
import Footer from './components/Footer'
import Progress from './components/Progress'
import Pg from './components/Pg'
import './App.css';


export default class App extends Component {

  state = {
    scrollPostion: 0
  }

  listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        this.calculateScrollDistance();
      });
    });
  }

  calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = this.getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)

    this.setState({
      scrollPostion,
    });
  }

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

  componentDidMount() {
    this.listenToScrollEvent();
  }
  render() {

    let abc=this.state.scrollPostion + '%';
    console.log(this.scrollToContent)
  return (
    
    <div className="App">
      
      {/*trash coding */}
      <Particles
            params={partic}
            className="particle"
          />
     <Pg height={abc}/>
    <Progress className="Progress" scroll={this.state.scrollPostion + '%'} />
       <Animate to="1" from="0" attributeName="opacity">
           
      <NavBar />
      <Header />
      <Crop  />
      <Fert />
      <Footer />

      </Animate>
    </div>
  );
}
}

