import React from 'react'
import Register from '../components/Register'
import Axios from 'axios'

export default class RegisterContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            lastname:'',
            email:'',
            password:'',
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(e){
        
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        return Axios.post('/api/users/register',{
            name:this.state.name,
            lastname:this.state.lastname,
            email:this.state.email,
            password:this.state.password
        })
        
    }
    render(){
        console.log(this.state)
        return(
            <Register handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        )
    }
}