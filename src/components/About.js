import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark'? 'white' : '#212529',
        backgroundColor: props.mode === 'dark' ? '#212529' : 'white'
    }

  return (
    <div className="container">
        <h1 className="my-2" style={{color: props.mode === 'dark'? 'white' : '#212529'}}>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze your text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    YouText gives you a way to analyze your text quickly and efficiently. Be it word count, character count, capitalizing your text, making all lower case, copying or removing extra space.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free to use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    YouText is a free character counter tool that provides instant character count and word count statistics for a given text. YouText reports the number of words and characters. Thus, it is suitable for writing with word/ character limit. 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browserrs such Chrome, firfox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, pdf document essays, etc.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
