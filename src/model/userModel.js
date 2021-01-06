import users from '../data/users.js';
const filename = './data/users.js'
import Utilities from "../helper/utils.js";

class UserModel {
    static insertUser(newUser) {
        return new Promise((resolve, reject) => {
            const id = { id: Utilities.generateNewId(users) }
            const date = {
                createdAt: Utilities.newDate(),
                updatedAt: Utilities.newDate()
            }
            newUser = { ...id, ...newUser, ...date }
            users.push(newUser)
            Utilities.writeJSONFile(2, users)
            resolve(newUser)
        })
    }
}

export default UserModel;