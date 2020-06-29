import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Nav from '../Nav/Nav';

class Dash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fruits: [],
            search: '',
            loading: true
        }
    }

    componentDidMount() {
        let url = 'http://localhost:4572/api/fruits';

        axios.get(url)
        .then(res => {
            this.setState({fruits: res.data});
            console.log(this.state.fruits);
        })
        .catch(err => console.log(err));
    }

    reset() {
        let url = 'http://localhost:4572/api/fruits';

        axios.get(url)
        .then(res => {
            this.setState({fruits: res.data, loading:false, search: ''})
        })
    }

    render() {
        let fruits = this.state.fruits.map((elem) => {
            return (
                <div className="fruit_list_item" key={elem.id}>

                    <div className="fruit_list_item_title_img_cont" >

                        <h2 className="fruit_list_item_title">{elem.name}</h2>

                        <img src={elem.img} width="75px" height="75px" alt="fruit" />

                    </div>

                    
                    <div className="fruit_box_content">

                        <strong>Type</strong><p>{elem.type}</p>

                        <strong>Description</strong><p>{elem.description}</p>

                    </div>

                </div>
            )
        })

        return (
            <div className="Dash">
                <Nav />

                <div className="dash_container">
                    {fruits}
                </div>

            </div>
        )
    }
}

export default Dash;