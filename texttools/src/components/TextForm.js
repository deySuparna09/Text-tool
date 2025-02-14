import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text has been cleared","success");
  };

  const handleCopy = () => {
    //let text = document.getElementById("myBox");
    //text.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copy","success");
  };

  const handleSpaces = () => {
    let newText = text.trim().replace(/\s+/g,' ');
    setText(newText);
    props.showAlert("Space has been removed","success");
    
  };

  const handleOnChange = () => {
    // eslint-disable-next-line no-restricted-globals
    setText(event.target.value);
  };
  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className = 'my-4'> {props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my=1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my=1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my=1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my=1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my=1" onClick={handleSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2> Yout text summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Mintues read</p>
        <h2> Preview </h2>
        <p> {text.length > 0 ? text : "Nothing to preview"} </p>
      </div>
    </>
  );
}
