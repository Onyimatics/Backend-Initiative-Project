import UserModel from "../model/userModel.js";

class UserController {
    static async createUser(req, res) {
        try {
            const user = await UserModel.insertUser(req.body)
            return res.status(201).json({
                message: `User #${user.id} successfully created`,
                content: user
            })
        } catch(error) {
            return res.status(500).json({ message: error.message })
        }

    }
}

export default UserController;