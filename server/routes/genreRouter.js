let {Router} = require('express')
let pool = require('../modules/pool.js')

let router = Router();

const GET_MOVIES_GENRES_QUERY = `
SELECT "genres".name
FROM "movies"
JOIN "movie_genre" ON "movies".id = "movie_genre".movie_id
JOIN "genres" ON "genres".id = "movie_genre".genre_id
WHERE "movies".id = $1;`

router.get('/:id', async (req, res) => {
  console.log('got to /api/genre')
  let result = await pool.query(GET_MOVIES_GENRES_QUERY, [req.params.id]);

  res.send(result.rows)
})

module.exports = router