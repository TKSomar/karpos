SELECT p.id AS post_id, p.author_id, p.title, p.content, p.img, u.first_name AS author
FROM posts p
JOIN users u ON u.id = p.author_id
WHERE p.id = $1;