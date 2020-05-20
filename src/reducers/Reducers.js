import { SEARCH_PIN } from '../actions/types'
import { FETCH_PINS} from '../actions/types'
import { LOADING} from '../actions/types'

const initialState = {
  searchText: '',
  pins: [],
  loading: false,
  pin: []
}
export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PIN:
      return {
        ...state,
        //assigns state of text field
        searchText: action.payload,
      }
    case LOADING:
      return {
        ...state,
        loading: true
      }
      case FETCH_PINS:
        return {
          ...state,
          //assigns state of pins array
          loading: false
        }   
    default:
      return state

  }
}


export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PINS:
      return {
        ...state,
        //assigns state of pins array
        pins: action.payload,
        loading: false
      }   
    default:
      return state
  }
}

