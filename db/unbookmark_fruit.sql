DELETE FROM bookmarked
WHERE user_id = $1 AND fruit_id = $2;