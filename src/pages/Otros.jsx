import React, { useState } from 'react';
import {Link} from "react-router-dom"
import './Otros.css'
import TaTeTi from '../components/TaTeTi.jsx';


export const Otros = () => {
  
  return (
  <>
    <h1>OTROS</h1>
  <Link to = "/"><button className="button">Inicio</button></Link>
    <TaTeTi/>
  </>);
};
