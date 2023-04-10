import express from 'express'
import {
     createTour,
     deleteTour,
     getAllTour,
     getSingleTour,
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

// getAll tour
router.get('/:id', getAllTour)

export default router;