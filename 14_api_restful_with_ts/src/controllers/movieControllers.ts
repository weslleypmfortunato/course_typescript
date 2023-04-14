import { Request, Response } from 'express'
import { MovieModel } from '../models/Movie'
import Logger from '../../config/logger'
import 'dotenv/config'
import mongoose from 'mongoose'

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body
    const movie = await MovieModel.create(data)
    return res.status(201).json(movie)
  } catch (error: any) {
    Logger.error(`System error: ${ error.messsage }`)
    return res.status(500).json({message: "Please, try again!"})
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: "It seems this is an incorrect ID"}) 
    }

    const movie = await MovieModel.findById(id)
 
    if (!movie) {
      return res.status(404).json({error: "Movie not found!"})
    }
    return res.status(200).json(movie)
  } catch (error: any) {
    Logger.error(`System error: ${error.message}`)
    return res.status(500).json({message: "Please, try again!"})
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find()
    return res.status(200).json(movies)
  }catch (error: any) {
    Logger.error(`System error: ${error.message}`)
    return res.status(500).json({message: "Please, try again!"})
  }
}

export async function removeMovie(req: Request, res: Response) {
  try {
    const id = req.params.id
    const movie = await MovieModel.findById(id)

    if (!movie) {
      return res.status(404).json({message: "Movie does not exist!"})
    }

    await movie.deleteOne()
    return res.status(200).json({message: "Movie removed successfully!"})

  }catch (error: any) {
    Logger.error(`System error: ${error.message}`)
    return res.status(500).json({message: "Please, try again!"})
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const id = req.params.id
    const data = req.body

    const movie = await MovieModel.findById(id)

    if (!movie) {
      return res.status(404).json({message: "Movie does not exist!"})
    }

    await MovieModel.updateOne({_id: id}, data)
    return res.status(200).json(data)

  }catch (error: any) {
    Logger.error(`System error: ${error.message}`)
    return res.status(500).json({message: "Please, try again!"})
  }
}