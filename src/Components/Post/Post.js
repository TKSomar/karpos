import React, {Component} from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';
import image_placeholder from '../../assets/image_placeholder.jpg';
import './Post.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            author_first: '',
            author_last: '',
            author_id: '',
            title: '',
            content: '',
            img: image_placeholder,
        }
    }

    componentDidMount() {
        axios
        .get('/api/auth/user')
        .then(res => {
            const {id, first_name, last_name} = res.data
            this.setState({author_first: first_name, author_last: last_name, author_id: id})
        })
        .catch(err => console.log(err))
    }

    submit = e => {
        e.preventDefault()
        const {author_id, author_first, author_last, title, content, img} = this.state

        axios.post('/api/post', {author_id, author_first, author_last, title, content, img})
        .then(() => {
            this.setState({title: '', content: '', img: ''})
            NotificationManager.success('Post has been successfully created!', 'Success!')
            this.props.history.push('/posts')
        })
        .catch(err => {
            alert('Something went wrong!')
            console.log(err)
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    resetImg = () => {
        if(this.state({img: ''})) {
            this.setState({img: image_placeholder})
        }
    }

    render() {
        const {title, content, img} = this.state
        return (
            <div className="Post">
                
                <Nav />


                    <div className="post_container">

                                            <h1 className="page_title">NEW POST</h1>

                        <form className="create_post" onSubmit={this.submit} >

                            <div className="inputs_container" >

                                <div className="title_content_container" >

                                    <input type="text" name="title" value={title} id="post_title" maxLength="50" onChange={this.handleChange} placeholder="Title" ></input>

                                    <textarea type="textarea" value={content} name="content" id="post_content" onChange={this.handleChange} placeholder="Text/Content"></textarea>

                                </div>

                                <div className="post_image_container" >

                                    <input type="url" name="img" id="post_image" placeholder="Image URL" onChange={this.handleChange} ></input>

                                    <img src={this.state.img} className="new_post_image" height="87%" width="100%" alt="karpos new post" />

                                </div>

                            </div>

                            

                            <div className="form_submit_container">
                                
                                <input type="submit" value="SUBMIT" id="post_submit" ></input>
                                
                            </div>

                        </form>
                    </div>
                <NotificationContainer/>
            </div>
        )
    }
}

export default Post;