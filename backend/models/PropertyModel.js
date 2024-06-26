import mongoose from "mongoose";

const FacilitySchema = new mongoose.Schema({
    internet: {
        type: String,
        required: true,
        default: "not included"
    },
    balcony: {
        type: Boolean,
        required: true,
        default: false
    }
}, { timestamps:true });

const HouseRuleSchema = new mongoose.Schema({
    smokingAllowed: {
        type: Boolean,
        required: true,
        default: false
    },
    petAllowed: {
        type: Boolean,
        required: true,
        default: false
    }
}, { timestamps:true });

const RentalTypeSchema = new mongoose.Schema({
    propertyType: {
        type: String,
        required: true,
        default: 'house'
    },
    rentType:{
        type:String,
        required:true,
        enum:['whole','sharing','room'],
        default:'whole'
    }
}, { timestamps:true });

const PropertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    bedRoom: {
        type: Number,
        required: true,
        min: 0
    },
    bathRoom: {
        type: Number,
        required: true,
        min: 0
    },
    propertyPictures:{
        type:[String],
        required:true,
        default:['https://d9twfl9s6jzl9.cloudfront.net/wp-content/uploads/2021/03/18111937/property-default-image.jpg']
    },
    facilities: FacilitySchema,
    houseRules: HouseRuleSchema,
    rentalType: RentalTypeSchema,
    landlordId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'LandlordModel',
        required:true
    },
}, { timestamps: true });


const PropertyModel = mongoose.model('PropertyModel', PropertySchema);

export default PropertyModel;
