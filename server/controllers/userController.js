// @desc    Register new user 
// @route   POST /api/users
// @access  Public
const registerUser = (req, res) =>{
    res.json({message: "Register User"})
}

// @desc    Authenticate a user 
// @route   POST /api/users/login
// @access  Public
const loginUser = (req, res) =>{
    res.json({message: "login User"})
}

// @desc    Get user data
// @route   GET /api/users/me
// @access  Public
const getMe = (req, res) =>{
    res.json({message: "Display my data"})
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
};