import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';
import Avatar from 'react-avatar';

class Posts extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: []
      }
    }

    componentDidMount() {
      let url = '/api/posts';

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