import express from 'express'
import {
     createTour,
     deleteTour,
     getAllTour,
     getSingleTour,
     getTourBySearch,
     updateTour
} from '../controllers/tourController.js'

const router = express.Router()

// create new tour
router.post('/', createTour)

// update tour
router.put('/:id', updateTour)

// delete new tour
router.delete('/:id', deleteTour)

// getSingle tour
router.get('/:id', getSingleTour)

// getAll tours
router.get('/', getAllTour)

// get tour by search
router.get('/search/getTourBySearch', getTourBySearch)

export default router;