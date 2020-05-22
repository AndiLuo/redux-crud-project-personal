import { NEW_PIN } from "./types";
import axios from "axios";

export const createPin = (data) => (dispatch) => {
    axios({
        method: 'POST',
        url: '/api/pins',
        data: {data},
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    })
}