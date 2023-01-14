import React from "react";
import "./ImageLinkForm.css"
const ImageLinkForm = () => {
    return (
        <div>
            <p className="f3"> {"Face detection in pictures"}</p>
            <div className="center">
                <div className="pa4 br3 shadow-4 form">
                    <input className="f44 pa2 w-70 center br3" type="text" />
                    <button className="mt4 w-30 grow br3 f4 link ph3 pv2 dib white bg-dark-green"> Find Face</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;