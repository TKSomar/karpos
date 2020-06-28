import React, {Component} from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';
import image_placeholder from '../../assets/image_placeholder.jpg';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            img: image_placeholder,
        }
    }

    submit = e => {
        e.preventDefault()
        const {title, content, img} = this.state

        axios.post('/api/post', {title, content, img})
        .then(() => {
            this.setState({title: '', content: '', img: ''})
            alert('Post successfully created!')
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

                                            <h1>New post</h1>

                        <form className="create_post" onSubmit={this.submit} >

                            <div className="inputs_container" >

                                <div className="title_content_container" >

                                    <input type="text" name="title" value={title} id="post_title" maxLength="50" onChange={this.handleChange} placeholder="Title" ></input>

                                    <textarea type="textarea" value={content} name="content" id="post_content" onChange={this.handleChange} placeholder="Text/Content"></textarea>

                                </div>

                                <div className="post_image_container" >

                                    <input type="url" name="img" id="post_image" placeholder="Image URL" onChange={this.handleChange} ></input>

                                    <img src={this.state.img} className="new_post_image" height="85%" width="100%" alt="karpos new post" />

                                </div>

                            </div>

                            

                            <div className="form_submit_container">
                                
                                <input type="submit" value="SUBMIT" id="post_submit" ></input>
                                
                            </div>

                        </form>
                    </div>

            </div>
        )
    }
}

export default Post;