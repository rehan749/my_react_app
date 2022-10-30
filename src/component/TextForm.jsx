import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('')
    // setText('new text...')---> currect way to change the state

    const toUpper = () => {
        let newText= text.toUpperCase()
        setText(newText)
        // console.log('uppercase')
    }
    const toLower = () => {
        let newText= text.toLowerCase()
        setText(newText)
        // console.log('uppercase')
    }
    const clearText = () => {
        let newText= ''
        setText(newText)
        // console.log('uppercase')
    }
    const onChangeValue = (event) => {
        // console.log('chang the text')
        setText(event.target.value);
    }
    const handleCopy=()=>{
        let text= document.getElementById('myBox');
        text.select();
       navigator.clipboard.writeText(text.value)
    }
    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}} >

            <h1 >{props.heading}</h1>
            <textarea className='form-control' placeholder='enter text here' style={{backgroundColor:props.mode==='dark'?'grey':'white'}} onChange={onChangeValue} value={text} id='mybox' rows='8' />
            <div className="btn btn-danger mx-1" onClick={toUpper}>Click to UpperCase</div>
            <div className="btn btn-danger mx-1" onClick={toLower}>Click to LowerCase</div>
            <div className="btn btn-danger mx-1" onClick={clearText}>Clear</div>
            <div className="btn btn-danger mx-1" onClick={handleCopy}>Copy text</div>
        </div>
        
        <div className="container">
        <h2>your text summary </h2>
     <p>{text.split(' ').length} words and {text.length} characters</p>
     <p>{0.008*text.split("").length} Mintus read</p>
     <h2>Preview </h2>
      <p>{text}</p>
        </div>
        </>

    )
}