import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Nav from '../Nav/Nav';
import './Dashboard.css';
import Bookmark from '../Bookmark/Bookmark';


class Dash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: '',
            fruits: [],
            search: '',
            loading: true
        }
    }

    componentDidMount() {
        let url = '/api/fruits';

        axios.get(url)
        .then(res => {
            this.setState({fruits: res.data});
            console.log(this.state.fruits);
        })
        .catch(err => console.log(err));

        axios.get('/api/auth/user')
        .then(res => {
            const {id} = res.data;
            this.setState({user_id: id});
        })
        .catch(err => console.log(err));
    }

    reset() {
        let url = '/api/fruits';

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

                        <img src={elem.img} width="95px" height="85px" alt="fruit" />

                    </div>

                    
                    <div className="fruit_box_content">

                        <strong>Type</strong><p>{elem.type}</p>

                        <strong>Description</strong><p>{elem.description}</p>

                    </div>

                    <Bookmark fruitId={elem.id} fruitName={elem.name} fruitType={elem.type} fruitDescription={elem.description} fruitImg={elem.img} />

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