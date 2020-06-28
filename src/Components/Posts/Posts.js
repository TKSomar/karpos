import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';

class Posts extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: []
      }
    }

    componentDidMount() {
      let url = 'http://localhost:4572/api/posts';

      axios.get(url)
      .then(res => {
        this.setState({posts: res.data});
      })
      .catch(err => console.log(err));
    }
    
    render() {
      let posts = this.state.posts.map((elem) => {
        return (
          <div className="post_list_item" key={elem.id}>
            <h2>{elem.title}</h2>
            <img src={elem.img} height="150px" width="200px" alt="karpos post" />
            <div className="post_content_container">
              <p>{elem.content}</p>
            </div>
          </div>
        )
      })
      return (
        <div className='Posts'>

          <Nav />

          <div className="posts_container">
            {posts}
          </div>

        </div>
      )
    }
  }
  
  export default Posts;