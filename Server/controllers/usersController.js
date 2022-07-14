const User = require("../model/userModel")
const brcypt = require("bcrypt")

module.exports.register = (req, res, next) => {
    const {username, email, pasword} = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck) {
        return res.json({msg: "Username already used", status: false});
    }
    const emailCheck = await User.findOne({ email })
    if (emailCheck) {
        return res.json({msg: "Email already used", status: false});
    }
    
};

