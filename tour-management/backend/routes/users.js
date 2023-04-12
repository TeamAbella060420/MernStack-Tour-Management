import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/useController.js'
const router = express.Router()

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

// update User
router.put('/:id', verifyUser, updateUser)

// delete new User
router.delete('/:id', verifyUser, deleteUser)

// getSingle User
router.get('/:id', verifyUser, getSingleUser)

// getAll Users
router.get('/', verifyAdmin, getAllUser)

export default router;