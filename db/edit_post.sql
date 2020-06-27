UPDATE posts
SET
title = $1,
content = $2,
img = $3
WHERE
id = $4 RETURNING *;