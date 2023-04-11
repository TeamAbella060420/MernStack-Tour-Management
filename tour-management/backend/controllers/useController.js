import User from '../models/User.js'

// create new User
export const createUser = async (req, res) => {

    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save()
        res.status(200).json({
            success: true,
            message: 'Successfully created aaa',
            data: savedUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create. Try again'
        })
    }
}

// update User
export const updateUser = async(req,res) => {

    const id = req.params.id

    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, {new: true})

        res.status(200).json({
            success: true,
            message: 'Successfully updated',
            data: updatedUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update. Try again'
        })
    }
}
// delete User
export const deleteUser = async(req,res) => {
    const id = req.params.id

    try {
        await User.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: 'Successfully deleted',
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete. Try again'
        })
    }
}
// getSingle User
export const getSingleUser = async(req,res) => {
    const id = req.params.id

    try {
        const User = await User.findById(id)
        res.status(200).json({
            success: true,
            message: 'Successfully single Get',
            data: User
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Not found single User'
        })
    }
}
// getAll User
export const getAllUser = async (req,res) => {

    // for pagination
    const page = parseInt(req.query.page)
    try {
        const Users = await User.find({}).skip(page * 8).limit(8)
        res.status(200).json({
            success: true,
            count: Users.length,
            message: 'Successfully Get All',
            data: Users
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Not found All User'
        })
    }
}