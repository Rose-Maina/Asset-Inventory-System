import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './Components/Login'
import {BrowserRouter as Route} from 'react-router-dom'


function App() {
  return (
    <Route exact path="/Login"><Login /></Route>
  )
}

export default App