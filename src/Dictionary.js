import React, {useState} from "react";
import axios from "axios";
import './dictionary.css';
import Results from "./Results.js";

export default function Dictionary (props){
let [keyword, setKeyword] =useState(props.defaultKeyword);
let [results, setResults] =useState(null);
let [loaded, setLoaded] =useState(false);

function handleResponse(response){
    setResults(response.data[0]);
}

function search (){
       let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
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
    </div>
   } else {
       load();
       return "Loading";
   }

}

