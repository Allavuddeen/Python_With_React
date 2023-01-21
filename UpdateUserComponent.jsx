import React, { Component } from 'react'

import UserService from '../services/UserService';

import { withRouter } from '../components/withRouter'



class UpdateUserComponent extends Component {

    constructor(props) {

        super(props)



        this.state = {

            id: this.props.id,

            first_name: '',

            last_name: '',

            email: ''

        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);

        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);

        this.updateUser = this.updateUser.bind(this);

    }



    componentDidMount(){

        UserService.getUserById(this.state.id).then( (res) =>{

            let user = res.data;

            this.setState({first_name: user.first_name,

                last_name: user.last_name,

                email : user.email

            });

        });

    }



    updateUser = (e) => {

        e.preventDefault();

        let user = {first_name: this.state.first_name, last_name: this.state.last_name, email: this.state.email};

        console.log('user => ' + JSON.stringify(user));

        console.log('id => ' + JSON.stringify(this.state.id));

        UserService.updateUser(user, this.state.id).then( res => {

            this.props.navigate('/users');

        });

    }

   

    changeFirstNameHandler= (event) => {

        this.setState({first_name: event.target.value});

    }



    changeLastNameHandler= (event) => {

        this.setState({last_name: event.target.value});

    }



    changeEmailHandler= (event) => {

        this.setState({email: event.target.value});

    }



    cancel(){

        this.props.navigate('/users');

    }



    render() {

        return (

            <div>

                <br></br>

                   <div className = "container">

                        <div className = "row">

                            <div className = "card col-md-6 offset-md-3 offset-md-3">

                                <h3 className="text-center">Update User</h3>

                                <div className = "card-body">

                                    <form>

                                        <div className = "form-group">

                                            <label> First Name: </label>

                                            <input placeholder="First Name" name="firstName" className="form-control"

                                                value={this.state.first_name} onChange={this.changeFirstNameHandler}/>

                                        </div>

                                        <div className = "form-group">

                                            <label> Last Name: </label>

                                            <input placeholder="Last Name" name="lastName" className="form-control"

                                                value={this.state.last_name} onChange={this.changeLastNameHandler}/>

                                        </div>

                                        <div className = "form-group">

                                            <label> Email Id: </label>

                                            <input placeholder="Email Address" name="emailId" className="form-control"

                                                value={this.state.email} onChange={this.changeEmailHandler}/>

                                        </div>



                                        <button className="btn btn-success" onClick={this.updateUser}>Save</button>

                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                    </form>

                                </div>

                            </div>

                        </div>



                   </div>

            </div>

        )

    }

}



export default withRouter(UpdateUserComponent)


