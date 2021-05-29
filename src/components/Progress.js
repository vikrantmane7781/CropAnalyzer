import styled from 'styled-components';

const  Progress  =  styled.div`
  position:  fixed;
  background:  linear-gradient(
    to right,
    rgba(0 0 0 / 80%) ${props => props.scroll},
    transparent  0);
  width:  100%;
  align-content: center;
  height:  2px;
  
`;


export  default  Progress;