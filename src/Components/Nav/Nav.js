import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {BsFillHouseDoorFill} from 'react-icons/bs';
import {BsFilePost} from 'react-icons/bs';
import {BsPencilSquare} from 'react-icons/bs';
import { GrLogout } from "react-icons/gr";

export default class Nav extends Component {

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
                        
                    </div>

                    <div className="nav_logout_icon_container">
                        <Link to ="/">
                            <GrLogout size="35px" className="logout_icon" />
                        </Link>
                    </div>
            </div>
        )
    }
}