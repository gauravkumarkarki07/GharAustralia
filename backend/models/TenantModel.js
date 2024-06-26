import mongoose from "mongoose";

const TenantSchema = new mongoose.Schema({
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
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
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
    currentAddress: {
        type: String,
        trim: true
    },
    savedProperty: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PropertyModel'
    }]
}, { timestamps: true });

const TenantModel = mongoose.model('TenantModel', TenantSchema);

export default TenantModel;
