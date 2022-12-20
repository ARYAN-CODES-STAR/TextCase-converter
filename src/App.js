import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';
import React, { useState } from 'react';


function App() {
  const [mode,  setMode] = useState('dark'); 

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
      

  }
  return (
    <>

<Navbar title="Text Converter" mode={mode} toggleMode={toggleMode}/>

<div className="container my-3">
<TextForm heading= "Enter text to be uppercased"/>
<About/>
</div>

    
        
    </>
  

  );
}

export default App;
