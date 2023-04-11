import express from 'express'
const router = express.Router()

// update tour
router.put('/:id', updateTour)

// delete new tour
router.delete('/:id', deleteTour)

// getSingle tour
router.get('/:id', getSingleTour)

// getAll tours
router.get('/', getAllTour)