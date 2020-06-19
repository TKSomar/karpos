import React, {Component} from 'react';
import axios from 'axios';

export default class Wishlist extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            description: '',
            image_url: ''
        }
    }

    render() {
        return (
            <div className="Wishlist">
                This is the Wishlist component.
            </div>
        )
    }
}