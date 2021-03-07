import React from 'react';
import SearchForm from './searchForm';
import {connect} from 'react-redux';
import PinContainer from './pinContainer';
import Spinner from './spinner'
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const mapStateToProps = state => ({
    loading: state.pins.loading
  })

function LandingPage(props) {

    //assign useHistory function to a const for routing
    const history = useHistory()
    //assign function incorporating history + route to button 

    const redirectCreate = () => {
        history.push('/createPin')
      }
    
    const loading = props.loading
    return(
        <div>
            <div align="center">
            <SearchForm />
            <span>
                <Button 
                onClick = {redirectCreate}
                variant= "outlined"
                color = "primary"
                >
                    Create your own pin!
                </Button>
            </span>
            {loading ? <Spinner/> : <PinContainer/> }
            </div>
        </div>
    )
}

export default withRouter(connect(mapStateToProps)(LandingPage));