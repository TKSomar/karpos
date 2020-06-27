import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {storeUser} from '../../redux/reducer';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.login = this.login.bind(this);
    }

    handleChange(prop, val) {
        if (val.length < 50) {
            this.setState({
                [prop]: val
            })
        }
    }

    login() {
        const {email, password} = this.state;
        axios.post('/api/auth/login', {email, password})
        .then(res => {
            const {id, first_name, last_name} = res.data
            this.setState({email: '', password: ''})
            this.props.storeUser(id, first_name, last_name);
            this.props.history.push('/dashboard');
        })
        .catch(err => alert(err.response.request.response))
    }

    render() {
        return (
            <div className="Auth">

                <div className="logo_container">

                    <h1 className="auth_logo">Karpós</h1>
                    <p className="auth_subtitle">Discover fruit, health, and connect with others!</p>

                </div>

                <div className="auth_container">

                    <div className="auth_input_box">

                        <p className="auth_input_title">Username</p>
                        <input value={this.state.email} onChange={e => this.handleChange('email', e.target.value)} type="email" />
                        </div>

                    <div className="auth_input_box">

                        <p className="auth_input_title">Password</p>
                        <input value={this.state.password} onChange={e => this.handleChange('password', e.target.value)} type="password" />

                    </div>

                    <div className="auth_button_container">
                        <button className="auth_button" onClick={this.login}>Login</button>
                        <Link to={`/register`}><p className="auth_register_link">Don't have an account? Click here to create one.</p></Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {storeUser})(Auth)