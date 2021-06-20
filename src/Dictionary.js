import React, {useState} from "react";
import axios from "axios";
import "./dictionary.css";
import Results from "./Results.js";

export default function Dictionary (){
let [keyword, setKeyword] =useState("");
let [results, setResults] =useState(null);
function handleResponse(response){
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
}

function search (event){
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
}
        
function handleKeywordChange(event){
    setKeyword(event.target.value);
}

    
    return <div className ="dictionary">
        <form class = "form-inline" onSubmit = {search}>
            <div class="form-group mx-sm-3 mb-2">
                <input type ="search" placeholder="type a word" className="form-control" onChange = {handleKeywordChange} />
            </div>
            <button type="submit" class="btn btn-primary mb-2">Search</button>
        </form>
        <Results results = {results}/>
    </div>
}

