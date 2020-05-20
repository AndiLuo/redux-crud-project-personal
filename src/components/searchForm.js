import React, { useEffect } from "react";
import { connect } from "react-redux";
import {searchPin, fetchPins, setLoading} from "../actions/fetchAction";
import TextField from '@material-ui/core/TextField';

const mapStateToProps = (state) => ({
  searchText: state.pins.searchText
})

function SearchForm(props) {

  useEffect(() => {
    props.fetchPins(props.searchText)
  })

  // sets search state to input value, call fetchPins here for auto fetch on input change
  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.value.length > 3 ){
      props.searchPin(e.target.value);
      props.setLoading();
      props.fetchPins(props.searchText)
    }
    else{
      return
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    props.fetchPins(props.searchText)
    props.setLoading();

  }


  return (
    <div direction="row" style={{ whiteSpace: 'nowrap'}}>
      &nbsp;
      <form onSubmit = {handleSubmit}>
        <TextField
          id="standard-basic"
          label="Search Pins"
          placeholder="Find You"
          onChange={handleChange}
          defaultValue={props.inputValue}
        />
        <p>{props.inputValue}</p>
      </form>
    </div>
  );
}

export default connect(mapStateToProps, {searchPin, fetchPins, setLoading})(SearchForm);

