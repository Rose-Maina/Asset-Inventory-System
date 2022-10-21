import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";

import Mainpage from './Components/Mainpage';

function App() {
  return (
    <>
      <Router>
        <Mainpage/>
      </Router>
      
    </>
  )
}

export default App;