import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Bookmark extends Component {
    constructor(){
        super();

        this.state = {
            bookmarked: false,
        }
    }

    componentDidMount = async () => {
        let {
            fruitDetails: {id}
        } = this.props,
        { data: bookmarked } = await axios.post('/api/bookmarked-or-not', {
            post: id,
        })
        this.setState({bookmarked})
    }

    bookmark = async () => {
        let {
            fruitDetails: {id}
        } = this.props
        
    }
}