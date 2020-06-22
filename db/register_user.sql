INSERT INTO users (full_name, email, password, created_at, country_code)
VALUES ($1, $2, $3, DATE, $4);