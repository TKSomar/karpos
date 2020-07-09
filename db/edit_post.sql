UPDATE posts
SET
title = $1,
content = $2
WHERE
author_id = $3 RETURNING *;