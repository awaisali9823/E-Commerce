import User from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

const SECRETKEY= 'secretkey'

export const registerUser = async (req, res) => {
    try {
        const {name, username, email, password, isAdmin, 
            userPic, phone, address} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const userNameExists = await User.findOne({username});
        const emailExists = await User.findOne({email});

        if(userNameExists){
           return res.status(400).json({message: "username already exits, use another one!"});
        }
        if(emailExists){
            return res.status(400).json({message: "Given Email is already in use, please register with another email!"});
        }
            const newUser = new User({
                name, username, email, password: hashedPassword, isAdmin, userPic,
                phone, address
            });
            await newUser.save();
            res.status(200).json({ message: "User created successfully"});
        } catch (error) {
            res.status(400).json({message: error.message})   
        }
}

// Users Get Request

export const getUsers = async (req, res) => {
    try {
            const users = await User.find()
            res.status(200).json(users);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//  LOGIN

export const loginUser = async (req, res) => {
    try {
            const {email, password} = req.body;
            const user = await User.findOne({email});
            if(!user){
                return res.status(400).json({message: "Invalid Credentials!"});
            }
            const passwordValid = await bcrypt.compare(password, user.password)
            if(!passwordValid){
                return res.status(400).json({message: "Invalid password!"});
            }
            const token = jwt.sign({ userId: user._id }, SECRETKEY, { expiresIn: '1hr' })
            return res.status(200).json({message: "Login Successfully"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}