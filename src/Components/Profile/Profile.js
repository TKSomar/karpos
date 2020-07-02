import React, {Component} from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';
import './Profile.css';
import Avatar from 'react-avatar';

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            userId: '',
            userPosts: [],
            savedFruit: []
        }
    }

    componenetDidMount() {
        axios.get('/api/auth/user')
        .then((req) => {
            const {id} = req.session.user;
            this.setState({userId: id})
        })
        .catch(err => console.log(err));
    }

    getUserPosts = (userId) => {
        axios.get(`/api/posts/?author_id=${userId}`)
        .then(res => {
            this.setState({userPosts: res.data})
        })
        .catch(err => console.log(err));
    }

    render() {
        let usersPosts = this.state.userPosts.map((elem) => {
            return (
                <div className="post_list_item" key={elem.id}>

            <div className="post_author_cont">

              <Avatar size="60" name={elem.author_first} round={true} />
              
              <p>{elem.author_first} {elem.author_last}</p>

            </div>

            <div className="title_content_post_item_cont">

              <h2 className="post_item_title">{elem.title}</h2>

                <div className="post_content_container">
                  <p className="post_item_content_text">{elem.content}</p>
                </div>

            </div>
            
            <div className="post_item_img_cont">

              <img src={elem.img} height="150px" width="200px" alt="karpos post" className="post_item_img" />

            </div>
            
          </div>
            )
        })
        return (
            <div className="Profile">

                <Nav />

                <div className="profile_container">

                    {usersPosts}

                </div>

            </div>
        )
    }
}

export default Profile