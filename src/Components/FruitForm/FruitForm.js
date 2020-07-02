import React, { Component } from 'react';
import axios from 'axios';

export default class FruitForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            type: '',
            description: '',
            img: ''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    addNewFruit = () => {
        const {name, type, description, img} = this.state;
        const newFruit = {name, type, description, img};
        this.props.addFruit(newFruit);
    }

    render() {
        const {name, type, description, img} = this.state
        return (
            <div className="Form">
                <input name="name" value={name} onChange={e => this.handleChange(e)} placeholder='name' autoComplete="off" />
                <input name="type" value={type} onChange={e => this.handleChange(e)} placeholder='type' autoComplete="off" />
                <textarea name="description" value={description} onChange={e => this.handleChange(e)} placeholder='description' autoComplete="off" />
                <input name="img" value={img} onChange={e => this.handleChange(e)} placeholder='img' autoComplete="off" />
                <button className="create_btn" onClick={this.addNewFruit}>Add</button>
            </div>
        )
    }
}