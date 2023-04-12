import express from 'express'
import {
     createTour,
     deleteTour,
     getAllTour,
     getSingleTour,
     getTourBySearch,
     getFeaturedTour,
     getTourCounts,
     updateTour
} from '../controllers/tourController.js';
import { verifyAdmin } from '../utils/verifyToken.js';
import { createReview } from '../controllers/reviewController.js';

const router = express.Router()

// create new tour
router.post('/', verifyAdmin, createTour)

// update tour
router.put('/:id', verifyAdmin, updateTour)

// delete new tour
router.delete('/:id', verifyAdmin, deleteTour)

// getSingle tour
router.get('/:id', createReview, getSingleTour)

// getAll tours
router.get('/', getAllTour)

// get tour by search
router.get('/search/getTourBySearch', getTourBySearch)
router.get('/search/getFeaturedTours', getFeaturedTour)
router.get('/search/getTourCount', getTourCounts)

export default router;