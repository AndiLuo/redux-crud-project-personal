import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { createPin } from '../actions/newPinAction'
import { withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class NewPin extends Component {

    constructor(){
        super();

        this.state = {
            pin:{}
        };
    }

    createSubmission(e) {
        let pinSubmission = Object.assign({}, this.state.pin)

        pinSubmission[e.target.id] = e.target.value
        this.setState({
            pin: pinSubmission
        })
    }

    handleSubmit(){
        this.props.dispatch(createPin(this.state.pin));    
        this.props.history.push("/");
        console.log(this.state.pin)
    }
    render() {
    return(
        <div>
            Title <TextField onChange={this.createSubmission.bind(this)} id="title" type="text" placeholder= "Title"/><br/>
                Author: <TextField onChange={this.createSubmission.bind(this)} id="author" type="text" placeholder= "author"/><br/>
                Image: <TextField onChange={this.createSubmission.bind(this)} id="image" type="text" placeholder= "image"/><br/>
                Description:
                <br/>
                <TextField multiline rows={3} onChange={this.createSubmission.bind(this)} id="description" type="text"/>
                <br/>
                Width:<TextField onChange={this.createSubmission.bind(this)} id="width" type="number"/>
                <br/>
                Height:<TextField onChange={this.createSubmission.bind(this)} id="height" type="number"/>

                <br/>
                <br/>
                <Button variant='contained' color="primary" onClick={this.handleSubmit.bind(this)}>Create Pin</Button>
        </div>
    )
}}

const mapStateToProps = state => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(NewPin));