import Conversation from "../models/conversation.js";
import Message from "../models/messageModel.js";


export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: recieverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, recieverId]
            },
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, recieverId]
            })
        }

        const newMessage = new Message({
            senderId, recieverId, message
        })

        if (newMessage) conversation.messages.push(newMessage._id);

        res.status(201).json(newMessage);

        await Promise.all([conversation.save(), newMessage.save()])


    } catch (error) {
        console.log("error in sendMessage controller", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
};

export const getMessages = async (req, res) => {
    try {
        const { id: recieverId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, recieverId]
            },
        }).populate("messages");

        if (!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
        console.log("error in getMessage controller", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}