This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Plan

### Idea and Users

- What problem(s) does your app solve?

<p>My app will make finding and learning about fruit fun and interactive with the social connection functionality which will allow users to post and share their fruit experience.</p>

- How does it solve those problems?

<p>Users can create an account, login, and share their experiences finding and eating exotic and non-exotic fruit. Users can also create a post, comment, and add fruits to a saved list so they can keep track of their favorties, as well as create a wishlist of fruits they'd like to try.</p>

- Who is your target user?

<p>Anyone who wants to explore the great world of fruit and health!</p>

- How much experience do they have with technology?

<p>From very little to possibly even no experience. I hope to have created something that anyone can use.</p>

### Features

MVP
- <span style="color: green">Display list of fruits with detailed information</span>
- <span style="color: green">Login functionality</span>
- <span style="color: green">User can create and view a saved list of fruits</span>
- <span style="color: green">User can create and view a wishlist of fruits</span>
- <span style="color: green">User can create and delete a post</span>
- <span style="color: green">User can comment on a post</span>

Bonus
- <span style="color: gold">User can follow/friend another user</span>
- <span style="color: gold">User can change their profile picture from the randomly generated default</span>

### Views

- What views do you need to create to meet each feature in your app?

<p>I need a login/authentication view, register, dashboard (that will display fruits to discover and search), profile (view saved list, posts, and wishlist), posts, and new post.</p>

- How will the user get to each view?

<p>There will be icons for each view in a global navigation component.</p>

<img src="./views/authentication.jpg" width="450px" />
<img src="./views/register.jpg" width="450px" />
<img src="./views/dashboard.jpg" width="450px" />
<img src="./views/posts.jpg" width="450px" />
<img src="./views/new_post.jpg" width="450px" />
<img src="./views/profile.jpg" width="450px" />


### Controllers

#### authCtrl.js

- login (/auth/login)
- register (/auth/register)
- logout (/auth/logout)
- getUser (/auth/user)

#### postCtrl.js

- getPosts (/api/posts)
- getUsersPosts (/api/posts/:user_id)
- newPost (/api/posts)
- editPost (/api/posts/:post_id)
- deletePost (/api/posts/:post_id)

#### commentCtrl.js

- newComment (/api/comments/)
- getComments (/api/comments/)
- editComment (/api/comments/:comment_id)
- deleteComment (/api/comments/:comment_id)

#### fruitCtrl.js

- getFruits (/api/fruits)
- getFruitsByName (/api/fruits/:name)
- getSavedFruits (/api/saved_fruits/:user_id)
- saveFruit (/api/saved_fruits)
- getWishlist (/api/wishlist/:user_id)
- savedToWishlist (/api/wishlist)

### Endpoints

- GET - <span style="color: green">(/api/fruits)</span> get list of fruits from db
- GET - <span style="color: green">(/api/posts)</span> get list of posts from db
- GET - <span style="color: green">(/api/posts/:user_id)</span> get list of user's posts from db
- GET - <span style="color: green">(/api/saved_fruits/:user_id)</span> get list of user's saved fruit list from db
- GET - <span style="color: green">(/api/wishlist/:user_id)</span> get list of user's fruit wishlist from db
- GET - <span style="color: green">(/api/comments)</span> get comments from db
- GET - <span style="color: green">(/auth/user)</span> get user
- POST - <span style="color: green">(/api/saved_fruits)</span> post fruit to saved fruit table in db
- POST - <span style="color: green">(/api/wishlist)</span> post fruit to wishlist table in db
- POST - <span style="color: green">(/api/comments)</span> post comment to table in db
- POST - <span style="color: green">(/auth/register)</span> register user in db
- POST - <span style="color: green">(/auth/login)</span> login user
- PUT - <span style="color: green">(/api/comments/:comment_id)</span> edit comment
- PUT - <span style="color: green">(/api/posts/:post_id)</span> edit post
- PUT - <span style="color: green">(/api/fruits/:fruit_id)</span> edit name of fruit, description, and image
- DELETE - <span style="color: green">(/auth/logout)</span> logout user
- DELETE - <span style="color: green">(/api/saved_fruits/:fruit_id)</span> remove fruit from saved list
- DELETE - <span style="color: green">(/api/wishlist/:fruit_id)</span> remove fruit from wishlist

### Schema

<img src="./views/schema.png" />

### Component Tree

<img src="./views/component_tree.PNG" width="500px" />