import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        rrequired: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    }
    //createdAt, updatedAt fields => meesage.createdAt : 15:30
}, {timestamps: true});

const Message = mongoose.model("Message", messageSchema);

export default Message;