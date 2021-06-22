import React from "react";
import "./phonetic.css";

export default function Phonetic (props) {
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
             🔊&nbsp;
            </a>
           
            {props.phonetic.text}
        </div>
    )
}