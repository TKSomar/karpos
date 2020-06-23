require('dotenv').config();

const express = require('express');
const massive = require('massive');
const session = require('express-session');
const cors = require('cors');

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const authCtrl = require('./Controllers/authCtrl');
const postCtrl = require('./Controllers/postCtrl');
const fruitCtrl = require('./Controllers/postCtrl');
const commentCtrl = require('./Controllers/commentCtrl');

const app = express();

const whitelist = ['https://www.fruityvice.com/']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions));

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24},
        secret: SESSION_SECRET
    })
);


//auth endpoints
// app.post('/api/auth/login', authCtrl.login);
// app.post('/api/auth/register', authCtrl.register);
// app.delete('/api/auth/logout', authCtrl.logout);

// //post endpoints
// app.get('/api/posts', postCtrl.getPosts);
// app.get('/api/posts/:user_id', postCtrl.getUsersPosts);
// app.post('/api/posts', postCtrl.newPost);
// app.put('/api/posts/:post_id', postCtrl.editPost);
// app.delete('/api/posts/:post_id', postCtrl.deletePost);

// //comment endpoints
// app.get('/api/comments', commentCtrl.getComments);
// app.post('/api/comments', commentCtrl.newComment);
// app.put('/api/commnets/:comment_id', commentCtrl.editComment);
// app.delete('/api/comments/:comment_id', commentCtrl.deleteComment);

// //fruit endpoints
// app.get('/api/fruits', fruitCtrl.getFruits);
// app.get('/api/fruits/:name', fruitCtrl.getFruitsByName);
// app.get('/api/saved_fruits/:user_id', fruitCtrl.getSavedFruits);
// app.get('/api/wishlist/:user_id', fruitCtrl.getWishlist);
// app.put('/api/saved_fruits', fruitCtrl.saveFruit);
// app.put('/api/wishlist', fruitCtrl.savedToWishlist);

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then (db => {
    app.set('db', db)
    console.log('Now connected to db.')
    app.listen ( SERVER_PORT, () => console.log(`Connected on port ${SERVER_PORT}`))
}).catch(err => console.log(err));