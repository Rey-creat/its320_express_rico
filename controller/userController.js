// import userSchema, {userSchema as User} from "../models/userModel";
// // OR
// const User = require('../models/userModel');
import User from '../models/userModel.js'
 
function createUser(req, res) {
    const { title, author, qoutes, published } = req.body;

    if (!title || !author || !qoutes || !published){
        res.send('Please fill all fields.')
    }

    const newUser = User.create({
        title, author, qoutes, published
    })

    if (!newUser) {
        res.status(500).send('Error while creatng user.')
    }

    return res.status(200).send('User successfully created.')
}

export { createUser };