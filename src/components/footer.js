import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import jonathan_img from "../headshot.jfif";
import pranav_img from "../IMG_2006.jpg";
import steven_img from "../BuzzCardPhoto.png";
import pratham_img from "../B175DF06-6459-4FF5-B916-F980888AD46E.JPG";


export default function Footer() {
  return (
    <Box
    display="flex"
  justifyContent="center"
  alignItems="center"
      sx={{
        display: 'flex',
        align: 'center',
        flexWrap: 'center',
        '& > :not(style)': {
          m: 1,
          width: 320,
          height: 320,
        },
      }}
    >
      <Paper elevation={2}>

        <Typography variant="h5" align="center" color="black" gutterBottom>
            Jonathan Liang
      </Typography>
      <Avatar 
sx={{
    justifyContent: "center", display: "inside",
          width: 130,
          marginLeft: '85px',
          height: 130,
      }} alt="" src={jonathan_img} />
      <Typography variant="h7" align="center" color="black" gutterBottom>
      Hi, my name is Jonathan and I am a computer science student at Georgia Tech. I have a profound interest in data science, machine learning, intelligence, but am also extremely enthusiastic about all things software-development-related.
      </Typography>



      </Paper>
      <Paper elevation={3}>
      <Typography variant="h5" align="center" color="black" gutterBottom>
            Pranav Narala
      </Typography>
      <Avatar 
sx={{
    justifyContent: "center", display: "inside",
          width: 130,
          marginLeft: '80px',
          height: 130,
      }} alt="" src={pranav_img} />
      <Typography variant="h7" align="center" color="black" gutterBottom>
      Hello, my name is Pranav Narala! I enjoy researching/exploring novel machine learning and data science breakthroughs. It fascinates me how we can apply complex mathematical algorithms to better understand the world around us. In my free time, I enjoy watching sports and cooking!
      </Typography>
      </Paper>
      <Paper elevation={4}>
      <Typography variant="h5" align="center" color="black" gutterBottom>
            Steven Li
      </Typography>
      <Avatar 
sx={{
    justifyContent: "center", display: "inside",
          width: 130,
          marginLeft: '80px',
          height: 130,
      }} alt="" src={steven_img} />
      <Typography variant="h7" align="center" color="black" gutterBottom>
      Hello! My name is Steven Li. I'm from Atlanta, GA and I love eating watermelon!
      </Typography>
      </Paper>
      <Paper elevation={5}>
      <Typography variant="h5" align="center" color="black" gutterBottom>
            Pratham Patel
      </Typography>
      <Avatar 
sx={{
    justifyContent: "center", display: "inside",
          width: 130,
          marginLeft: '80px',
          height: 130,
      }} alt="" src={pratham_img} />
      <Typography variant="h7" align="center" color="black" gutterBottom>
      Hi! My name’s Pratham and I love keeping up with novel technologies and learning about advanced machine learning . On a Saturday afternoon, you can catch me playing a casual board game with friends and family!
      </Typography>
      </Paper>
    </Box>
  );
}