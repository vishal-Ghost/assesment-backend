
const LogoutController = async(req,res) =>{
    try {
        res.clearCookie('jwt', { path: '/' });
        res.send({message:'logged out successfully'})
        
    } catch (error) {
        res.send({message:'Something went wrong!!'})
        
    }

}

module.exports = LogoutController