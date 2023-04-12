import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/useController.js'
const router = express.Router()

import { verifyUser } from '../utils/verifyToken.js'

// update User
router.put('/:id', updateUser)

// delete new User
router.delete('/:id', deleteUser)

// getSingle User
router.get('/:id', verifyUser, getSingleUser)

// getAll Users
router.get('/', getAllUser)

export default router;