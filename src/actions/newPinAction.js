import { NEW_PIN } from "./types";
import axios from "axios";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'https://api.liveconnect.in/backend/web/erpsync/get-all-orders?data=dbCode=UAT04M%7Cidx=100%7CuserId=6214%7Cres_format=1'

export const createPin = (data) => (dispatch) => {
    axios({
        method: 'POST',
        url: 'http://localhost:8080/api/pins',
        data: {data},
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify(data)

    })
}