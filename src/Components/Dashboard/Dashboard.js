import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Dash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fruits: [],
            search: '',
            loading: true
        }
    }

    getFruits() {
        let {search, fruits} = this.state;
        let url = '/api/fruits';
        if (fruits && !search) {
            url += '?mine=true';
        } else if (!fruits && search) {
            url += `?search=${search}`;
        } else if (fruits && search) {
            url += `?mine=true&search=${search}`;
        }

        axios.get(url)
        .then(res => {
            setTimeout(_ => this.setState({fruits: res.data, loading: false}), 500)
        })
    }

    reset() {
        let {fruits} = this.state;
        let url = '/api/fruits';
        if (fruits) {
            url += '?mine=true';
        }

        axios.get(url)
        .then(res => {
            this.setState({posts: res.data, loading:false, search: ''})
        })
    }

    render() {
        let fruits = this.state.fruits.map((elem) => {
            return <Link to={`/fruits/${elem.fruit_id}`} key={elem.fruit_id}>
                <div className="content_box dashboard_fruit_box">
                    <h2>{elem.name}</h2>
                    <div className="fruit_box">
                    <img src={elem.image_url} width="80%" height="50%" alt="fruit" />
                    <p>{elem.description}</p>
                    </div>
                </div>
            </Link>
        })

        return (
            <div className="Dash">
                <div className="content_box">

                </div>
            </div>
        )
    }
}

export default Dash;