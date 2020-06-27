SELECT
p.title, p.author_id, p.id AS post_id, u.first_name AS author
FROM posts p
JOIN users u ON u.id = p.author_id
WHERE p.title ILIKE '%' || $1 || '%'
ORDER BY
p.id DESC;