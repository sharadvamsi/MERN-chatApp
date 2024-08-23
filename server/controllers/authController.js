import bcrypt from "bcryptjs";
import User from "../models/userModel.js"
import generateJwtToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords doesn't match" })
        }

        const user = await User.findOne({ userName });

        if (user) {
            return res.status(400).json({ error: "userName already exists:)" })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if (newUser) {
            generateJwtToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePic: newUser.profilePic
            })

        } else {
            res.status(400).json({ error: "Invalid user data" })
        }


    } catch (error) {
        console.log("signup error controller", error.message);

        res.status(500).json({ error: "Internal Server error" })
    }
}

export const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        if (!user) return res.status(400).json({ error: "Invalid userName :)" });

        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) return res.status(400).json({ error: "Invalid Password :)" });

        generateJwtToken(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic
        })


    } catch (error) {
        console.log("login error controller", error.message);
        res.status(500).json({ error: "Internal Server error" });
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out Succesfully" });
    } catch (error) {
        console.log("logout error controller", error.message);
        res.status(500).json({ error: "Internal Server error" });
    }
}


