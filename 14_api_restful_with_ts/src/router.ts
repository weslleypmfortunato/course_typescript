import { Router, Request, Response } from 'express'
import { createMovie, findMovieById, getAllMovies, removeMovie, updateMovie } from './controllers/movieControllers'
import { validate } from './middlewares/hsndleValidation'
import { movieCreateValidation } from './middlewares/movieValidation'

const router = Router()

router.get("/test", (req: Request, res: Response) => {
  res.status(200).send("API working properly")
})
.post('/movie', movieCreateValidation(), validate, createMovie)
.get('/movie/:id', findMovieById)
.get('/movies', getAllMovies)
.delete('/movie/:id', removeMovie)
.patch(`/movie/:id`, movieCreateValidation(), validate, updateMovie)


export default router