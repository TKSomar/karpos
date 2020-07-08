import React, {Component} from 'react';
import { BsBookmark } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import axios from 'axios';

class Bookmark extends Component {
    constructor(props){
        super(props);

        this.state = {
            bookmarked: false,
            user_id: '',
            fruit_id: props.fruitId,
            fruit_name: props.fruitName,
            fruit_type: props.fruitType,
            fruit_description: props.fruitDescription,
            fruit_img: props.fruitImg
        }
    }

    componentDidMount() {
        axios.get('/api/auth/user')
        .then(res => {
            const {id} = res.data;
            this.setState({user_id: id});
        })
        .catch(err => console.log(err));
    }

    bookmark = async () => {
        const {user_id, fruit_id, fruit_name, fruit_type, fruit_description, fruit_img} = this.state
        this.setState({bookmarked: true})

        axios.post('/api/bookmarked/', {user_id, fruit_id, fruit_name, fruit_type, fruit_description, fruit_img})
        .then(() => {
            alert('Successfully bookmarked!')
        })
    }

    unBookmark = async () => {
        const {user_id, fruit_id} = this.state
        this.setState({bookmarked: false})

        axios.delete(`/api/bookmarked/${user_id}`, {fruit_id})
        .then(() => {
            alert('Removed from bookmarks.')
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="bookmark_cont">
                {this.state.bookmarked ? <BsBookmarkFill onClick={this.unBookmark} /> : <BsBookmark onClick={this.bookmark} /> }
            </div>
        )
    }
}

export default Bookmark;