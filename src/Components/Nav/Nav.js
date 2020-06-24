import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import {FaComments} from 'react-icons/fa';
import {FaEdit} from 'react-icons/fa';
import {FaSignOut} from 'react-icons/fa';

export default class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="nav_logo_container">
                    <h1>Karpós</h1>
                </div>

                    <div className="nav_routes_icons_container">
                        <Link to="/dashboard">
                            <FaHome />
                        </Link>

                        <Link to="/posts">
                            <FaComments />
                        </Link>

                        <Link to="/post">
                            <FaEdit />
                        </Link>
                    </div>

                    <div className="nav_profile_image_container">

                    </div>

                    <div className="nav_logout_icon_container">
                        <FaSignOut />
                    </div>
            </div>
        )
    }
}