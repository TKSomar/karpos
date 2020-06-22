CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(50),
    email VARCHAR(30),
    password TEXT,
    profile_image TEXT,
    created_at TIMESTAMP,
    country_code INT,
    last_login DATE
);

CREATE TABLE countries (
    code INT,
    name VARCHAR(40),
    continent_name VARCHAR(40)
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id REFERENCES users(id),
    post_type ENUM('text', 'image', 'video'),
    content VARCHAR(300),
    created_at TIMESTAMP
);

CREATE TABLE user_posts (
    user_id REFERENCES posts(user_id)
    post_id REFERENCES posts(id),
    content VARCHAR(300),
    created_at REFERENCES posts(created_at)
);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    post_id REFERENCEs posts(id),
    user_id REFERENCES users(id),
    profile_image REFERENCES users(profile_image),
    created_at TIMESTAMP
);

CREATE TABLE fruits (
    fruit_id PRIMARY SERIAL KEY,
    name VARCHAR(40),
    description VARCHAR(150),
    image_url TEXT
);

CREATE TABLE saved_fruits (
    fruit_id REFERENCES fruits(fruit_id),
    user_id REFERENCES users(id),
    name REFERENCES fruits(name),
    description REFERENCES fruits(description).
    image_url REFERENCES fruits(image_url)
);

CREATE TABLE wishlist (
    fruit_id REFERENCES fruits(fruit_id),
    user_id REFERENCES users(id),
    name REFERENCES fruits(name),
    description REFERENCES fruits(description),
    image_url REFERENCES fruits (image_url)
);