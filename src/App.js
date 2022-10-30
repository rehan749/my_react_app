
import './App.css';
import Navbar from './component/navbar';
import Footer from './component/footer';
import TextForm from './component/TextForm';
// import About from './component/About';

import React, { useState } from 'react';



function App() {
  const [mode, setmode] = useState('light')  //whether dark mode is enabled or not
  const toggleMode = () => {

    if (mode === 'light') {
      setmode('dark')
     document.body.style.backgroundColor='grey'
     document.title='dark mode'
     setInterval(() => {
      document.title='i am virus'
     }, 2000);
     setInterval(() => {
      document.title='install my app'
     }, 5000);
    }
    else {
      setmode('light')
      document.body.style.backgroundColor='white'
      document.title='light mode'
    }
  }


  return (
    <>
      <div className="App">
        {/* <Navbar title="Filpkart"/> */}
        <Navbar mode={mode} toggleMode={toggleMode} />
        
          <TextForm heading='enter text here....' />
        <Footer />
          {/* <About /> */}
        </div>
      
    </>
  );
}

export default App;
