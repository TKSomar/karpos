require('dotenv').config();

const express = require('express');
const massive = require('massive');
const session = require('express-session');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const authCtrl = require('./Controllers/authCtrl');
const postCtrl = require('./Controllers/postCtrl');
const fruitCtrl = require('./Controllers/fruitCtrl');
// const commentCtrl = require('./Controllers/commentCtrl');

const app = express();

app.use(express.json());

// CORS header `Access-Control-Allow-Origin` set to accept all
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })


app.use(
    session({
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24},
        secret: SESSION_SECRET
    })
    );

app.use(express.static(`${__dirname}/../build`));



    //auth endpoints
app.post('/api/auth/login', authCtrl.login);
app.post('/api/auth/register', authCtrl.register);
app.post('/api/auth/logout', authCtrl.logout);
app.get('/api/auth/user', authCtrl.getUser);

// //post endpoints
app.get('/api/posts', postCtrl.getPosts);
app.get('/api/post/:post_id', postCtrl.getPost);
app.post('/api/post', postCtrl.createPost);
app.put('/api/post/:post_id', postCtrl.editPost);
app.delete('/api/post/:post_id', postCtrl.deletePost);

// //comment endpoints
// app.get('/api/comments', commentCtrl.getComments);
// app.post('/api/comments', commentCtrl.newComment);
// app.put('/api/commnets/:comment_id', commentCtrl.editComment);
// app.delete('/api/comments/:comment_id', commentCtrl.deleteComment);

// //fruit endpoints
app.get('/api/fruits', fruitCtrl.getFruits);
// app.get('/api/fruits/:name', fruitCtrl.getFruitsByName);
app.post('/api/bookmarked', fruitCtrl.bookmarkFruit);
app.delete('/api/bookmarked/:fruit_id', fruitCtrl.unBookmarkFruit)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then (db => {
    app.set('db', db)
    console.log('Now connected to db.')
    app.listen ( SERVER_PORT, () => console.log(`Connected on port ${SERVER_PORT}`))
}).catch(err => console.log(err));