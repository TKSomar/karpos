import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../Nav/Nav';
import Avatar from 'react-avatar';
import './Posts.css';

class Posts extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posts: [],
        post_id: '',
        author_id: '',
        title: '',
        content: '',
        img: '',
        editing: false,
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

    changeHandler = e => this.setState({ [e.target.name]: e.target.value })

    deletePost = (postId) => {
      axios.delete(`/api/posts/${postId}`)
      .then(res => {
        this.setState({posts: res.data})
        this.props.history.push('/posts')
      })
    }

    editPost = async (postId) => {
      const {title, content} = this.state,
      post = (
        await axios.put(`/api/posts/${postId}`, {title, content})
        .catch(err => {
          alert('Something went wrong!')
          console.log(err)
        })
      )
    }

    toggleEditOn = () => {
      this.setState({editing: true})
    }

    toggleEditOff = () => {
      this.setState({editing: false})
    }

    getPost = () => {
      const {post_id} = this.props.match.params
      axios.get(`/api/post/${post_id}`)
      .then(res => {
        const {post_id, author_id, title, content, img} = res.data
        this.setState({post_id, author_id, title, content, img})
      })
    }
    
    render() {
      const {title, content, img, editing} = this.state;
      let posts = this.state.posts.map((elem) => {
        return (
          <div className="post_list_item" key={elem.id}>

            <div className="post_author_cont">

              <Avatar size="60" name={elem.author_first} round={true} />
              
              <p>{elem.author_first} {elem.author_last}</p>

            </div>

            <div className="title_content_post_item_cont">

              {editing ? (
                <input type="text" name="title" value={elem.title} onChange={this.changeHandler}/>
              ) : <h2 className="post_item_title">{elem.title}</h2> }

                <div className="post_content_container">

                  {editing ? (
                    <textarea name="content" value={elem.content} onChange={this.changeHandler} />
                  ) : <p className="post_item_content_text">{elem.content}</p> }
                  
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