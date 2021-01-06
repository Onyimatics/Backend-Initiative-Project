class UserValidation {
    static checkInteger(req, res, next) {
        const id = req.param.id;

        if (!Number.isInteger(parseInt(id))) {
            return res.status(400).json({message: 'ID must be an integer'})
        }
        return next()
    }

    static userInputs(req, res, next) {
        const { first_name, last_name, username, email } = req.body;

        if (first_name && last_name && username && email) {
            return next()
        }
        return res.status(400).json({message: 'Invalid field'})
    }
}

export default UserValidation;