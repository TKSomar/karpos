import React, { Component } from 'react';
import axios from 'axios';

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
          This is the Posts Component.
        </div>
      )
    }
  }
  
  export default Posts;