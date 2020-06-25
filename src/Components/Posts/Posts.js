import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';

class Posts extends Component {
    constructor(props) {
      super(props);
      this.state = {
        author: '',
        author_pic: '',
        img: '',
        content: '',
        loading: true
      }
    }
    
    render() {
      return (
        <div className='Posts'>

          <Nav />

          <div className="posts_container">
            This is the Posts Component.
          </div>

        </div>
      )
    }
  }
  
  export default Posts;