import {APIError} from "../utils/api-error.util.js"
import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    // I'll take data here from three ways: 
    // 1. body, 2. URL, 3. params
    const [name, email, password] = req.body
    
    if(!name || !email || !password){
        return res.status(401).json(new APIError(401, "All fields are required" ))
    }

    // try to find if the user already exists in the database or not?
    


};

export { registerUser };
