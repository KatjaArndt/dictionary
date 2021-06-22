import React from "react";
import "./photos.css"

export default function Photos (props){
    console.log(props.photos);
    if (props.photos) {
        return (
             <section className="photos">
                 <div className="row">
                       {props.photos.map(function(photo, index){
            return(
                <div className="col-4" key={index}>
                    <img src={photo.src.landscape}  alt={props.alt}/>

                 </div>
      
                
                
            );
        })}
        </div>
        </section>
        )

    } else {
        return null;
    }
}