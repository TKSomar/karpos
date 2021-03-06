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
            isEditing: false,
            newTitle: '',
            newContent: ''
        }
    }

    componentDidMount() {
        this.getUser();
    }

    getUserPosts = () => {
        const {user_id} = this.state
        axios.get(`/api/posts/${user_id}`)
        .then(res => {
            this.setState({userPosts: res.data});
        })
        .catch(err => console.log(err));
    }

    getBookmarked = async () => {
        const {user_id} = this.state
        console.log("hit")
        console.log(user_id)
        let userFruits = await axios.get(`/api/bookmarked/${user_id}`)
        console.log(userFruits)
        // .then(res => {
        //     this.setState({savedFruit: res.data});
        //     console.log(res.data);
        // })
        // .catch(err => console.log(err));
    }

    getUser = () => {
        axios.get('/api/auth/user')
        .then(res => {
            const {id, first_name, last_name} = res.data
            this.setState({user_id: id, user_first: first_name, user_last: last_name});
            console.log(this.state.user_id);
            this.getUserPosts();
            this.getBookmarked();
        })
        .catch(err => console.log(err));
    }

    editPost = (post_id) => {
        const {newTitle, newContent} = this.state
        axios.put(`/api/posts/edit/${post_id}`, {newTitle, newContent})
        .then(res => {
            alert('Post successfully edited!')
            this.setState({isEditing: false,})
            this.getUserPosts();
        })
        .catch(err => console.log(err))
    }

    toggleEdit = () => {
        this.setState({isEditing: true,})
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    deletePost = (post_id) => {
        axios.delete(`/api/posts/delete/${post_id}`)
        .then(() => {
            alert('Post successfully removed.');
            this.getUserPosts();
        })
        .catch(err => console.log(err))
    }

    render() {
        const {isEditing, newTitle, newContent} = this.state;
        let usersPosts = this.state.userPosts.map((elem) => {
            return (
                <div className="post_list_item" key={elem.id}>

            <div className="post_author_cont">

              <Avatar size="60" name={elem.author_first} round={true} />
              
              <p>{elem.author_first} {elem.author_last}</p>

            </div>

            <div className="title_content_post_item_cont">

            { isEditing ? <div className="title_editing"><input value={newTitle} name="newTitle" onChange={e => this.handleChange(e)} id="edit_title" type="text" /></div> :
              <h2 className="post_item_title">{elem.title}</h2> }

                <div className="post_content_container">
                    { isEditing ? <div className="content_editing"><textarea value={newContent} name="newContent" onChange={e => this.handleChange(e)} id="edit_content" type="text" /></div> : <p className="post_item_content_text">{elem.content}</p> }
                </div>

            </div>
            
            <div className="post_item_img_cont">

              <img src={elem.img} height="150px" width="200px" alt="karpos post" className="post_item_img" />

            </div>

            <div className="edit_delete_cont">


                <div className="edit_btn_cont">
                    { isEditing ? <button className="save_btn" onClick={() => {this.editPost(elem.id)}}>Save</button> : '' }
                    { isEditing ? '' : <button className="edit_btn" onClick={() => {this.toggleEdit()}}>Edit</button> }
                </div>

                <div className="delete_btn_cont">
                    <button className="delete_btn" onClick={() => {this.deletePost(elem.id)}}>Delete</button>
                </div>

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

                    <div className="users_fruits_cont">
                        {usersFruits}
                    </div>

                </div>

            </div>
        )
    }
}

export default Profile