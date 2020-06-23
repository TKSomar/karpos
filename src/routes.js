import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Authentication from './Components/Authentication/Authentication';
import Dash from './Components/Dashboard/Dashboard';
import Register from './Components/Register/Register';
import Post from './Components/Post/Post';
import Posts from './Components/Posts/Posts';
import Profile from './Components/Profile/Profile';

export default (
    <Switch>
        <Route exact path="/" component={Authentication} />    
        <Route path="/register" component={Register} />    
        <Route path="/dashboard" component={Dash} />    
        <Route path="/post" component={Post} />    
        <Route path="/posts" component={Posts} />    
        <Route path="/profile" component={Profile} />    
    </Switch>
)