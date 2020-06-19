import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: '',
            content: '',
            loading: true
        }
    }

    submit() {
        axios.post('/api/post', this.state)
        .then(res => this.props.history.push('/posts'))
        .catch(err => alert('Make sure you are logged in to create a new post.'))
    }

    render() {
        return (
            <div className="Post">
                Create a new post.
            </div>
        )
    }
}

export default Post;