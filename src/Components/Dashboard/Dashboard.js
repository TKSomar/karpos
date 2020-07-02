import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Nav from '../Nav/Nav';
// import './Dashboard.css';
import Bookmark from '../Bookmark/Bookmark';
import { StyleSheet, css } from 'aphrodite';
// import FruitForm from '../FruitForm/FruitForm';


class Dash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: '',
            fruits: [],
            search: '',
            loading: true
        }
        
        this.addFruit = this.addFruit.bind(this);
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

    addFruit(newFruit) {
        axios.post('/api/fruits', newFruit)
        .then(res => {
            this.setState({
                fruits: res.data
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        let fruits = this.state.fruits.map((elem) => {
            return (
                <div className={css(styles.fruit_list_item)} key={elem.id}>

                    <div className={css(styles.fruit_list_item_title_img_cont)} >

                        <h2 className={css(styles.fruit_list_item_title)}>{elem.name}</h2>

                        <img src={elem.img} className={css(styles.fruit_list_item_img)} width="165px" height="105px" alt="fruit" />

                    </div>

                    
                    <div className={css(styles.fruit_box_content)}>

                        <strong>Type</strong><p>{elem.type}</p>

                        <strong>Description</strong><p className={css(styles.fruit_list_item_description)}>{elem.description}</p>

                    </div>

                    <Bookmark fruitId={elem.id} fruitName={elem.name} fruitType={elem.type} fruitDescription={elem.description} fruitImg={elem.img} />

                </div>
            )
        })

        return (
            <div className="Dash">
                <Nav />

                <div className={css(styles.dash_container)}>
                    {fruits}
                </div>

            </div>
        )
    }
}

const styles = StyleSheet.create({
    dash_container: {
        width: '100%',
        height: '100%',
        top: '130px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
      
      dashboard_fruit_box: {
        width: '200px',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      
      fruit_list_item: {
        '@media(max-width: 480px)': {
              height: '250px',
              margin: '8px 0',
            },
        width: '85%',
        height: '176px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        margin: '25px 0',
        borderRadius: '5px',
        border: '2px solid rgb(104, 99, 99)',
        boxShadow: '10px 5px 5px #d6d6d6',
        padding: '4px 8px',
      },
      
      fruit_list_item_title_img_cont: {
        '@media(max-width: 480px)': {
            width: '50%',
            height: '100%',
            textAlign: 'center',
          },
        display: 'flex',
        flexDirection: 'column',
        margin: '5px 2px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '35%',
      },

      fruit_list_item_img: {
        '@media(max-width: 480px)': {
            width: '120px',
            height: '110px',
        }
      },

      fruit_list_item_title: {
        '@media(max-width: 480px)': {
            margin: '2px 0',
        }
      },
      
      fruit_box_content: {
          margin: '2px 4px',
          width: '75%',
      }
    });

export default Dash;