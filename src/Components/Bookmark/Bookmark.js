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
        this.setState({bookmarked: true})
    }

    unBookmark = async () => {
        this.setState({bookmarked: false})
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