import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Nav from '../Nav/Nav';

class Dash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            fruits: [],
            search: '',
            loading: true
        }
    }

    componentDidMount() {
        let url = 'https://www.fruityvice.com/api/fruit/all';

        axios.get(url)
        .then(res => {
            this.setState({fruits: res.data});
            console.log(this.state.fruits);
        })
        .catch(err => console.log(err));
    }

    reset() {
        let url = 'https://www.fruityvice.com/api/fruit/all';

        axios.get(url)
        .then(res => {
            this.setState({posts: res.data, loading:false, search: ''})
        })
    }

    render() {
        let fruits = this.state.fruits.map((elem) => {
            return <Link to={`/fruit/${elem.id}`} key={elem.id}>
                <div className="content_box dashboard_fruit_box">
                    <h2>{elem.name}</h2>
                    <div className="fruit_box">
                    <p>{elem.family}</p>
                    </div>
                </div>
            </Link>
        })

        return (
            <div className="Dash">
                <Nav />

                <div className="dash_container">
                    This is the Dashboard component.
                    {fruits}
                </div>

            </div>
        )
    }
}

export default Dash;