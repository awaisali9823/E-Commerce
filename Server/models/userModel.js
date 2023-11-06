import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    name:       {type: String, required: true},
    username:   {type: String, unique: true, required: true},
    email:      {type: String, unique: true, required: true},
    password:   {type: String, required: true},
    isAdmin:    {type: String},
    userPic:    {type: String},
    phone:      {type: Number},
    address:    {type: String},

})

const schema = mongoose.model("User", userSchema);
export default schema