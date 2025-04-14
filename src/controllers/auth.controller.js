import { APIError } from "../utils/api-error.util.js";
import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    // I'll take data here from three ways:
    // 1. body, 2. URL, 3. params
    const [username, email, password] = req.body;

    if (!username || !email || !password) {
        return res.status(401).json(new APIError(401, "All fields are required"));
    }

    try {
        // try to find if the user already exists in the database or not?
        const existingUser = await User.findOne({ email, username });

        if (existingUser) {
            return res.status(402).json(new APIError(402, "User already exist."));
        }

        // if user is not there then create the user and save it into database
        const user = await User.create({ email, username, password });
    } catch (error) {}
};

const login = async (req, res) =>{

}

const deleteUser = async (req, res) =>{
    
}

export { registerUser, login, deleteUser };
