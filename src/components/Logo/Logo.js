import React from "react";
import "./Logo.css"
import logoImage from './under-construction.png'
import Tilty from 'react-tilty';

const Logo = () => {
    return (
        <div className="ma4 mt2">
            <Tilty className="tilty br3 shadow-3" glare scale={1.05} maxGlare={0.5}>
                <div className="inner"><img height={200*.8} alt="logo" src={logoImage}></img></div>
            </Tilty>
        </div>
    );
}

export default Logo;