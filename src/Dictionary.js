import React, {useState} from "react";
import axios from "axios";
import './dictionary.css';
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary (props){
let [keyword, setKeyword] =useState(props.defaultKeyword);
let [results, setResults] =useState(null);
let [loaded, setLoaded] =useState(false);
let [photos, setPhotos] =useState(null);

function handleResponse(response){
    setResults(response.data[0]);
}
function handlePexelsResponse(response){
setPhotos(response.data.photos);
}
function search (){
       let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
        let pexelsApiKey = "563492ad6f917000010000012f3f26f79b0f49a1bad4d00694563a5a";
        let pexelsApiUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`  
        let headers = {Authorization: `Bearer ${pexelsApiKey}`}
        axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
}

function handleSubmit (event){
        event.preventDefault();
     
        search();
}
        
function handleKeywordChange(event){
    setKeyword(event.target.value);
}

function load() {
    setLoaded(true);
    search();
}
   if(loaded){
           return <div className ="dictionary">
        <section className ="search-section">
           <h2>
      What are you looking for?
           </h2>
                     
         
 
                    <form className = "form-inline" onSubmit = {handleSubmit}>
            <div className="searchbox">
                <input type ="search" placeholder="type a word" className="form-control" onChange = {handleKeywordChange} defaultValue ={props.defaultKeyword} />
            </div>
            {/*<button type="submit" class="btn btn-light mb-2">Search</button>*/}
        </form>
        <div className="hint">
            suggested words: marathon, assistant, hello, web, ...
        </div>
        </section>

        <Results results = {results}/>
        <Photos photos = {photos} alt={keyword}/>
    </div>
   } else {
       load();
       return "Loading";
   }

}

