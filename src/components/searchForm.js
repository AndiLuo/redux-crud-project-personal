
import React from "react";
import { connect } from "react-redux";
import {searchPin, fetchPins, setLoading} from "../actions/fetchAction";

const mapStateToProps = (state) => ({
  searchText: state.pins.searchText
})

function SearchForm(props) {

  // sets search state to input value
  const handleChange = (e) => {
    props.searchPin(e.target.value);
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
        <input
          id="searchFormr"
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

