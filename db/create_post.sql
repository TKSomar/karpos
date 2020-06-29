INSERT INTO posts
(author_id, author_first, author_last, title, content, img)
VALUES
($1, $2, $3, $4, $5, $6)
RETURNING *;