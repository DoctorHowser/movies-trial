CREATE TABLE "movie_genre" (
	"id" SERIAL PRIMARY KEY,
	"movie_id" INT NOT NULL REFERENCES "movies",
	"genre_id" INT NOT NULL REFERENCES "genres"

);