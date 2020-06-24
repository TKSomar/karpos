import React, {Component} from 'react';
import axios from 'axios';

class Register extends Component {
    constructor(){
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className="Register">

                <div className="logo_container">
                    <h1 className="register_logo">Karpós</h1>
                    <p>The fruit discovery app.</p>
                </div>

                <div className="form_container">

                    <div className="register_input_box">
                        <p>First name</p>
                        <input type="text" id="first_name"></input>
                    </div>

                    <div className="register_input_box">
                        <p>Last name</p>
                        <input type="text" id="last_name"></input>
                    </div>

                    <div className="register_input_box">
                        <p>Email</p>
                        <input type="text" id="email"></input>
                    </div>

                    <div className="register_input_box">
                        <p>Password</p>
                        <input type="text" id="password"></input>
                    </div>

                    <div className="register_button_container">
                        <button className="register_btn">Create account</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Register;