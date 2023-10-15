import logo from './logo.svg';
import './App.css';
import * as React from 'react';

import Navbar from './components/navbar'
import Dashboard from './components/dashboard';
import HuggingFace from './components/hugging_face';
import Header from './components/header';
import Footer from './components/footer';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';






function App() {
  return (

    <div className="App">
      <Navbar variant="contained"/>

      <Header variant="contained"/>

      <Box
      sx={{
        width: '100%',
        height: 20,
        backgroundColor: 'none',
      }}
    />
    <Divider />
    <Box
      sx={{
        width: '100%',
        height: 20,
        backgroundColor: 'none',
      }}
    />

      <Dashboard variant="contained"/>

      <Box
      sx={{
        width: '100%',
        height: 20,
        backgroundColor: 'none',
      }}
    />
    <Divider />
    <Box
      sx={{
        width: '100%',
        height: 20,
        backgroundColor: 'none',
      }}
    />
      <HuggingFace variant="contained"/>

      <Box
      sx={{
        width: '100%',
        height: 20,
        backgroundColor: 'none',
      }}
    />
    <Divider />
    <Box
      sx={{
        width: '100%',
        height: 20,
        backgroundColor: 'none',
      }}
    />

    <Footer variant="contained"/>
    </div>
  );
}

export default App;
