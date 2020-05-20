import React from 'react';
import SearchForm from './searchForm';
import {Provider, connect} from 'react-redux';
import PinContainer from './pinContainer';
import Spinner from './spinner'

const mapStateToProps = state => ({
    loading: state.pins.loading
  })

function LandingPage(props) {
    const loading = props.loading
    return(
        <div>
            <SearchForm />
            {loading ? <Spinner/> : <PinContainer/> }
        </div>
    )
}

export default connect(mapStateToProps)(LandingPage);