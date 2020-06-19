import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import home from './home.png';
import posts from './posts.png';
import post from './posts.png';
import logout from './logout.png';

export default class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="nav_logo_container">
                    <h1>Karpós</h1>
                </div>

                    <div className="nav_routes_icons_container">
                        <Link to="/dashboard">
                            <img src={home} alt="home" />
                        </Link>

                        <Link to="/posts">
                            <img src={posts} alt="posts" />
                        </Link>

                        <Link to="/post">
                            <img src={post} alt="post" />
                        </Link>
                    </div>

                    <div className="nav_profile_image_container">

                    </div>

                    <div className="nav_logout_icon_container">
                        <img src={logout} alt="logout" />
                    </div>
            </div>
        )
    }
}