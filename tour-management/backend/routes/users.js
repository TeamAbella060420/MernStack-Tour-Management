import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/useController'
const router = express.Router()

// update User
router.put('/:id', updateUser)

// delete new User
router.delete('/:id', deleteUser)

// getSingle User
router.get('/:id', getSingleUser)

// getAll Users
router.get('/', getAllUser)

export default router;