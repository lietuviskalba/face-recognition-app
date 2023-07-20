import React from "react";
import "./FaceRecognition.css"

const FaceRecognition = ({ imgURL }) => {
    return (
        <div className="center ma4 mt2">
            <div className="absolute mt2">
                <img alt='' src={imgURL} width='500px' height='auto' />
            </div>
        </div>
    );
}

export default FaceRecognition;