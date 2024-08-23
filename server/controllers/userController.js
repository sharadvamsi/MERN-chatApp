import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("error in getuser controller", error.message);

        res.send(500).json({ error: "Internal Server error" })
    }
}