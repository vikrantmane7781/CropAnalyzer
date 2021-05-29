const particles = {
  "particles": {
     "number": {
       "value": 20,
       "density": {
         "enable": true,
         "value_area": 400
       }
     },
     "color": {
       "value": "#ffffff"
     },
     "shape": {
       "type": "circle",
       "stroke": {
         "width": 3,
         "color": "#000000"
       },
       "polygon": {
         "nb_sides": 3
       },
       "image": {
         "src": "img/github.svg",
         "width": 100,
         "height": 100
       }
     },
     "opacity": {
       "value": 0.5,
       "random": true,
       "anim": {
         "enable": false,
         "speed": 1,
         "opacity_min": 0.1,
         "sync": false
       }
     },
     "size": {
       "value": 4,
       "random": true,
       "anim": {
         "enable": false,
         "speed": 40,
         "size_min": 0.1,
         "sync": false
       }
     },
     "line_linked": {
       "enable": true,
       "distance": 100,
       "color": "#000",
       "opacity": 0.1,
       "width": 1
     },
     "move": {
       "enable": true,
       "speed": 2,
       "direction": "none",
       "random": false,
       "straight": false,
       "out_mode": "out",
       "bounce": true,
       "attract": {
         "enable": false,
         "rotateX": 600,
         "rotateY": 1200
       }
     }
   },
   "interactivity": {
     "detect_on": "window",
     "events": {
       "onhover": {
         "enable": true,
         "mode": "grab"
       },
       "onclick": {
         "enable": true,
         "mode": "push"
       },
       "resize": true
     },
     "modes": {
       "grab": {
         "distance": 150,
         "line_linked": {
           "opacity": 0.6
         }
       },
       "bubble": {
         "distance": 400,
         "size": 20,
         "duration": 2,
         "opacity": 3,
         "speed": 3
       },
       "repulse": {
         "distance": 200,
         "duration": 0.4
       },
       "push": {
         "particles_nb": 4
       },
       "remove": {
         "particles_nb": 2
       }
     }
   },
   "retina_detect": true
 } 

 export default particles