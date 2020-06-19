import React, {Component} from 'react';
import axios from 'axios';

export default class Saved extends Component {
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
            <div className="Saved">
                This is the Saved component.
            </div>
        )
    }
}