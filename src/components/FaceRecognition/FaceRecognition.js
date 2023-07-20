import React from "react";
import "./FaceRecognition.css"

const FaceRecognition = ({ imgURL, box }) => {
    return (
        <div className="center ma4 mt2">
            <div className="absolute mt2">
                <img id='inputImgFromURL' alt='' src={imgURL} width='500px' height='auto' />
                <div className="bounding-box" style={{
                    top: box.topRow,
                    right: box.rightCol,
                    bottom: box.botRow,
                    left: box.leftCol,
                }}></div>
            </div>
        </div>
    );
}



export default FaceRecognition;