import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        let newText =  text.toLowerCase();
        setText(newText)
    }

    // const handleOnCopy = (event) => {
    //      console.log("copied!")
    //      text.navigator.clipboard.writeText(myBox.value)
    // }

    const handleOnChange = (event) => {
        //console.log("ON CHANGE")
        setText(event.target.value)//it was working fine even if I not pass anything in the brackets of arrow function & setText. WEIRD!
    }

    const [text, setText] = useState('')
    //text="new text" Wrong way of changing state
    //setText=("new text")  //correct way of changing state
  return (
      <>
       <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
            {/* <button className="btn btn-primary mx-1" onClick={handleOnCopy}>Copy Text</button> */}
       </div> 
       <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div> 
      </>
  )
}
