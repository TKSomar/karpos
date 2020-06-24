import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {MDBIcon} from 'mdbreact';

export default class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="nav_logo_container">
                    <h1 className="nav_logo">Karpós</h1>
                </div>

                    <div className="nav_routes_icons_container">
                        <Link to="/dashboard">
                            <MDBIcon icon="home" className="white-tex" />
                        </Link>

                        <Link to="/posts">
                            <MDBIcon far icon="comments" className="white-tex" />
                        </Link>

                        <Link to="/post">
                            <MDBIcon far icon="edit" className="white-tex" />
                        </Link>
                    </div>

                    <div className="nav_profile_image_container">

                    </div>

                    <div className="nav_logout_icon_container">
                        <MDBIcon icon="sign-out-alt" className="white-text" size="2x" />
                    </div>
            </div>
        )
    }
}