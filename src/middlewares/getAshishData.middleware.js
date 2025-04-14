import ashish from "../constants/ashishBio.constant.js"

export const  attachAshishData = async (req, res, next) =>{
    req.customData = JSON.stringify( ashish)
       
    
    next()
}