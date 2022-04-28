import "./App.css";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import Alert from "./components/Alert"
import React, { useState } from 'react'
import About from "./components/About"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');    
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {           
    setAlert({
      msg : message,
      type : type
    })
    setTimeout( () => {
      setAlert(null);
    }, 1500) 
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-light')
  }

  const toggleMode = (cls) => {
    removeBodyClasses()
    document.body.classList.add('bg-'+cls)
    if(mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } 
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="YouText" aboutText="About YouText" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        <Routes>
            <Route path="/about" element={ <About  mode={mode} /> }>
            </Route>
            <Route path="/" element={ 
            <TextForm showAlert={showAlert} heading="Try YouText - Word Counter, character Counter" mode={mode}/> }>
            </Route>
        </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
