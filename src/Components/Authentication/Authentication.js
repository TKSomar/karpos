import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import e from 'express';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.login = this.login.bind(this);
    }

    handleChange(prop, val) {
        if (val.length < 10) {
            this.setState({
                [prop]: val
            })
        }
    }

    login() {
        axios.post('/api/auth/login', this.state)
        .then(rex => {
            this.props.updateUser(res.data);
            this.props.history.push('/dashbaord');
        })
    }

    render() {
        return (
            <div className="Auth">
                <div className="auth_container">

                    <h1 className="auth_logo">Karpós</h1>

                    <div className="auth_input_box">

                        <p>Username:</p>
                        <input value={this.state.username} onChange={e => this.handleChange('username', e.target.value)} />
                        </div>

                        <div className="auth_input_box">
                        <p>Password:</p>
                        <input value={this.state.username} onChange={e => this.handleChange('username', e.target.value)} />

                    </div>

                    <div className="auth_button_container">
                        <button className="auth_button" onClick={this.login}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {})(Auth);