const userModel = require('../Models/user');

exports.registerUser = async (req, res) => {
    try {
        const { email, name, photoUrl } = req.body;
        const userExists = await userModel.findOne({email:email});

        if (!userExists) {
            const newUser = new userModel({
                email,name,photoUrl
            });
            await newUser.save();
            res.status(200).json({ message: "User registered successfully", user: newUser });
        }
        return res.status(200).json({ message: "Welcome back", user: userExists });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Server Error", message: err.message });
        console.log("error while registering user ", err);
    }
}