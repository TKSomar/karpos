SELECT * FROM bookmarked
WHERE user_id = $1
ORDER BY bookmarked.id ASC;