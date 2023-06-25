import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onSubmit}) => {
    return (
        <div>
            <p className="ma0 center br3 formText"> {"Face detection in pictures"}</p>
            <div className="center">
                <div className="pa4 br3 shadow-4 form">
                    <input className="f44 pa2 w-70 center br3" type="text" placeholder="Enter image URL here..." onChange={onInputChange}/>
                    <button className="mt4 w-30 grow br3 f4 link ph3 pv2 dib white bg-dark-green" onClick={onSubmit}> Find Face</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;