import {inputReducer, fetchReducer} from './Reducers'
import { combineReducers } from 'redux';

export default combineReducers({
    pins: inputReducer, fetchReducer
});


