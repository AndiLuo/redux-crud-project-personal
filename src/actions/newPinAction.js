import { NEW_PIN } from "./types";
import axios from "axios";

export function createPin(data){
    return dispatch => {
        return fetch('http://localhost:8080/api/pins', { 
            method: 'POST', 
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data),
            mode: 'cors'})
            .catch( (e) => console.log(e) );
    }    
}