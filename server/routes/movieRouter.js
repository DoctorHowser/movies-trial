let {Router} = require('express')
let pool = require('../modules/pool.js')

let router = Router();


const GET_MOVIES_QUERY = `SELECT * FROM "movies";`
const GET_SINGLE_MOVIE_QUERY = `SELECT * FROM "movies" WHERE id = $1;`
const UPDATE_MOVIE_QUERY = `UPDATE "movies" SET title = $1, description = $2 WHERE id = $3`

router.get('/', async (req, res) => {
  console.log('got to /api/movie')
  let result = await pool.query(GET_MOVIES_QUERY);

  res.send(result.rows)
})

router.get('/:id', async (req, res) => {
  console.log('got to /api/movie/:id')
  let result = await pool.query(GET_SINGLE_MOVIE_QUERY, [req.params.id]);

  res.send(result.rows)
})

router.put('/:id', async (req, res) => {
  const {id} = req.params
  const {title, description} = req.body
  console.log('got to /api/movie/:id')
  await pool.query(UPDATE_MOVIE_QUERY, [title, description, id]);

  res.sendStatus(200);
})

module.exports = router