import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {BsFillHouseDoorFill} from 'react-icons/bs';
import {BsFilePost} from 'react-icons/bs';
import {BsPencilSquare} from 'react-icons/bs';
import { GrLogout } from "react-icons/gr";
import Avatar from 'react-avatar';
import blank_transparent from '../../assets/blank_transparent.png';

import axios from 'axios';
import {connect} from 'react-redux';
import {storeUser} from '../../redux/reducer';
import {withRouter} from 'react-router';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
        }
    }

    logout = () => {
        axios.post('/api/auth/logout')
        .then(() => {
            this.props.history.push('/')
        })
    }

    componentDidMount() {
        axios
        .get('/api/auth/user')
        .then(res => {
            const {id, first_name, last_name} = res.data
            this.setState({user: first_name})
            this.props.storeUser(id, first_name, last_name)
        })
        .catch(() => {
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div className="Nav">
                <div className="nav_logo_container">
                    <h1 className="nav_logo">Karpós</h1>
                </div>

                    <div className="nav_routes_icons_container">
                        <Link to="/dashboard">
                            <BsFillHouseDoorFill color="white" size="35px" className="nav_item" />
                        </Link>

                        <Link to="/posts">
                            <BsFilePost color="white" size="35px" className="nav_item" />
                        </Link>

                        <Link to="/post">
                            <BsPencilSquare color="white" size="35px" className="nav_item" />
                        </Link>
                    </div>

                    <div className="nav_profile_image_container">
                        <Link to="/profile">
                            <Avatar name={this.state.user} size="70" round={true} />
                        </Link>
                    </div>

                    <div className="nav_logout_icon_container">
                        <Link onClick={this.logout} to="/">
                            <GrLogout size="35px" className="logout_icon" id="logout_icon" />
                        </Link>
                    </div>
            </div>
        )
    }
}


const mapStateToProps = state => state

export default connect(mapStateToProps, { storeUser })(withRouter(Nav))