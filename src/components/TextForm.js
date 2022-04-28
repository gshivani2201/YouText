import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLowClick = () => {
        let newText =  text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleOnCopy = () => {
        console.log("copied!")
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to Clipboard", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra-space removed!", "success")
    }

    const [text, setText] = useState('')
  return (
      <>
       <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className="mb-4">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
       </div> 
       <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview here"}</p>
        </div> 
      </>
  )
}
