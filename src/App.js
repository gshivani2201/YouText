import "./App.css";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import Alert from "./components/Alert"
import React, { useState } from 'react'
//import About from "./components/About"

function App() {
  const [mode, setMode] = useState('light');     //tells whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {             //showAlert is a function here diff from setAlert
    setAlert({
      msg : message,
      type : type
    })
    setTimeout( () => {
      setAlert(null);
    }, 1500) 
  }

  const toggleMode = () => {
    if(mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "YouText - Dark Mode";
      // setInterval (() => {
      //   document.title = "YouText is Amazing";
      // }, 3000)
      // setInterval (() => {
      //   document.title = "Install YouText now";
      // }, 2500)
    } 
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "YouText - Light Mode";
    }
  }
  return (
    <>
      <Navbar title="YouText" aboutText="About YouText" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
