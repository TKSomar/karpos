import React, {Component} from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            img: '',
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

    render() {
        const {title, content, img} = this.state
        return (
            <div className="Post">
                
                <Nav />


                    <div className="post_container">

                                            <h1>New post</h1>

                        <form className="create_post" onSubmit={this.submit} >

                            

                            <p>Title</p>

                            <input type="text" name="title" value={title} id="post_title" maxLength="50" onChange={this.handleChange} ></input>

                            <p>Content</p>

                            <textarea type="textarea" value={content} name="content" id="post_content" onChange={this.handleChange}></textarea>

                            <p>Image URL</p>

                            <input type="url" value={img} name="img" id="post_image" onChange={this.handleChange} ></input>

                            <div className="form_submit_container">
                                
                                <input type="submit" value="Submit" id="post_submit" ></input>
                            </div>
                        </form>
                    </div>

            </div>
        )
    }
}

export default Post;