import './App.css';
import classes from './Styles.module.css';
import React, { useState } from 'react';
import Timer from './components/Timer/Timer';
import CardDiv from './components/UI/Card';
import InfoComponent from './components/InfoComponent';

function App() {
  return (
    <div className={classes.backgroundDiv}>
      <InfoComponent></InfoComponent>
      <Timer></Timer>
    </div>
  );
}

export default App;
