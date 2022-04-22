import "./App.css";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import React, { useState } from 'react'
//import About from "./components/About"

function App() {
  let [mode, setMode] = useState('light');     //tells whether dark mode is enabled or not

  const toggleMode = () => {
    if(mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="YouText" aboutText="About YouText" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
