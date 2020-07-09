import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../redux/reducer';
import './Register.css';
import {Link} from 'react-router-dom';

class Register extends Component {
    constructor(){
        super();

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            sent: false,
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      }

    register = (e) => {
        e.preventDefault();
        const {first_name, last_name, email, password} = this.state;
        axios.post('/api/auth/register', {first_name, last_name, email, password})
        .then(res => {
            const {id, first_name, profile_pic} = res.data;
            this.setState({first_name: '', last_name: '', email: '', password: ''});
            this.props.getUser(id, first_name, profile_pic);
            this.props.history.push('/dashboard');
        })
        .catch(err => alert(err.response.request.response))
    }

    sendMail = () => {
        const {first_name, last_name, email} = this.state
        axios.post('/api/mail', {first_name, last_name, email})
        .then(() => {
            console.log('Email successfully sent!')
        })
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div className="Register">

                <div className="logo_container">
                    <h1 className="register_logo">Karpós</h1>
                    <p>The fruit discovery app.</p>
                </div>

                <div className="form_container">

                    <div className="have_acc_txt_cont">
                        <Link to="/"><p>Already have an account? Click here.</p></Link>
                    </div>

                    <form onSubmit={this.register}>

                    <div className="register_input_box">
                        <p>First name</p>
                        <input type="text" id="first_name" name="first_name" onChange={this.handleChange}></input>
                    </div>

                    <div className="register_input_box">
                        <p>Last name</p>
                        <input type="text" id="last_name" name="last_name" onChange={this.handleChange}></input>
                    </div>

                    <div className="register_input_box">
                        <p>Email</p>
                        <input type="text" id="email" name="email" onChange={this.handleChange}></input>
                    </div>

                    <div className="register_input_box">
                        <p>Password</p>
                        <input type="password" id="password" name="password" onChange={this.handleChange}></input>
                    </div>

                    <div className="register_button_container">
                        <button type="submit" className="register_btn">Create account</button>
                    </div>

                    </form>


                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {getUser})(Register);