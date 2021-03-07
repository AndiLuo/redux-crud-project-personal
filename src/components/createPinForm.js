import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { createPin } from '../actions/newPinAction'
import { withRouter } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


class NewPin extends Component {

    constructor(){
        super();
        this.state = {
            pin:{},
            confirm: ''
        };
    }

    componentDidMount(){

    }
    //looks at each textfields ID and sets values in this.state.pin according to that textfields value
    createSubmission(e) {
        let pinSubmission = Object.assign({}, this.state.pin)
        pinSubmission[e.target.id] = e.target.value
        this.setState({
            pin: pinSubmission
        })
    }
    //calls createPin action and assigns the pin state to body
    handleSubmit(e){
        e.preventDefault()
        this.props.dispatch(createPin(this.state.pin));    
        this.props.history.push("/");
        console.log(this.state.pin)
    }

    confirmEntry(e){
        e.preventDefault()
        this.setState({
            confirm: 'true'
        })
        alert('Entry confirmed, please press create pin ')
      }
    
    validateEntry(){
        if( this.state.confirm === 'true'){
            return this.state.confirm
        }
    }

    render() {
    return(
        <div>
            <Link to = "/">
                Back to landing page
            </Link>
            <div align = "center">
            <form labelWidth={60}>
                <TextField required onChange={this.createSubmission.bind(this)} size = "medium"  id="title" type="text" placeholder= "Title"  /><br/>
                <TextField required onChange={this.createSubmission.bind(this)} id="author" type="text" placeholder= "Author"/><br/>
                <TextField required onChange={this.createSubmission.bind(this)} id="image" type="text" placeholder= "Image"/><br/>
                Enter a description:
                <br/>
                <TextField multiline rows={3} onChange={this.createSubmission.bind(this)} variant="outlined" id="description" type="enter a description..." />
                <br/>
                <TextField required onChange={this.createSubmission.bind(this)} id="width" type="number" placeholder= "Designate width"/>
                <br/>
                <TextField required onChange={this.createSubmission.bind(this)} id="height" type="number" placeholder= "Designate height"/>

                <br/>
                <br/>
                <Button 
                variant='contained' 
                color="primary"
                onClick={this.confirmEntry.bind(this)}>
                    Confirm Entry
                </Button>
                <Button   
                    disabled={!this.state.confirm}
                    variant='contained' 
                    color="primary" 
                    onClick={this.handleSubmit.bind(this)}>
                Create Pin</Button>
             </form>
             </div>
        </div>
    )
}}

const mapStateToProps = state => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(NewPin));