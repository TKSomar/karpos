import React, {Component} from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            userId: '',
            wishlist: [],
            myPosts: [],
            savedFruit: []
        }
    }

    render() {
        return (
            <div className="Profile">

                <Nav />

                <div className="profile_container">

                    This is the profile component.

                </div>

            </div>
        )
    }
}

export default Profile