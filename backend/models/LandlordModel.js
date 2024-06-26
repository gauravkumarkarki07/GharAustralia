import mongoose from "mongoose";

const LandlordSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    profilePicture: {
        type: String,
        required: true,
        default:'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png'
    },
    phone: {
        type: String,
        trim: true
    },
    dateOfBirth: {
        type: Date,
    },
    address: {
        type: String,
        trim: true
    },
    isVerified: {
        type: Boolean,
        required:true,
        default:false
    },
    propertiesOwned: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PropertyModel'
    }]
}, { timestamps: true });

const LandlordModel = mongoose.model('LandlordModel', LandlordSchema);

export default LandlordModel;
