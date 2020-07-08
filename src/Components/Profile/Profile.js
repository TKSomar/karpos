import React, {Component} from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';
import './Profile.css';
import Avatar from 'react-avatar';
// import { getBookmarked } from '../../../server/Controllers/fruitCtrl';
// import { getUser } from '../../redux/reducer';
// import { getUserPosts } from '../../../server/Controllers/postCtrl';

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            user_id: '',
            user_first: '',
            user_last: '',
            userPosts: [],
            savedFruit: [],
        }
    }

    componentDidMount() {
        this.getUser();
        this.getBookmarked();
        this.getUserPosts();
    }

    getUserPosts = () => {
        const {user_id} = this.state
        axios.get(`/api/posts/${user_id}`)
        .then(res => {
            this.setState({userPosts: res.data});
        })
        .catch(err => console.log(err));
    }

    getBookmarked = () => {
        const {user_id} = this.state
        axios.get(`/api/bookmarked/${user_id}`)
        .then(res => {
            this.setState({savedFruit: res.data})
        })
        .catch(err => console.log(err));
    }

    getUser = () => {
        axios.get('/api/auth/user')
        .then(res => {
            const {id, first_name, last_name} = res.data
            this.setState({user_id: id, user_first: first_name, user_last: last_name})
            console.log(this.state)
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

        let usersFruits = this.state.savedFruit.map((elem) => {
            return (
                <div className="fruit_item" key={elem.id}>
                    <img src={elem.img} className="bookmarked_fruit_img" alt="fruit displayed" />
                </div>
            )
        })
        return (
            <div className="Profile">

                <Nav />

                <div className="profile_container">

                    <h1>{this.state.user_first} {this.state.user_last}</h1>

                    {usersPosts}

                    {usersFruits}

                </div>

            </div>
        )
    }
}

export default Profile