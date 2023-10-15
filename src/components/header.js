import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import back_img from "../image.png"

import './header.css'

import Typography from '@mui/material/Typography';


export default function Header() {
  return (
    <div className = "head-text">
        <div className = "head-image">
          <img src = {require ('../Untitled drawing (6).png')} alt = "Freedom Blog" width='100%' height={600}/>
        </div>
          <div class='text-on-image'>
          <Typography variant="h1" font="montserrat" color="white" gutterBottom>
        Welcome to NutriMentor!
      </Typography>
      <Typography variant="h5" font="poppins" color="white" gutterBottom>
      Your personalized college meal planner and health data visualizer! This website has two parts: a lang-chain meal planner and nutrition data dashboard.
      </Typography>
          </div>
      </div>
  );
}