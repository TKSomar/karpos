DELETE FROM posts
WHERE id = $1;

SELECT p.title, p.author_id, p.id AS post_id, u.first_name AS author
FROM posts
JOIN users u ON u.id = p.author_id
ORDER BY p.id DESC;