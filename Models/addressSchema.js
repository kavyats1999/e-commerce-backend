const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    buildingname: {
        type: String,
        required: true
    },
    cityname: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalcode: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
});

addressSchema.pre('save', async function(next) {
    if (this.id == null) {
        this.id = await generateUniqueId();
    }
    next();
});

const addresses = mongoose.model('addresses', addressSchema);
module.exports = addresses;

async function generateUniqueId() {
    const latestAddress = await addresses.findOne().sort('-id');
    return (latestAddress && latestAddress.id) ? latestAddress.id + 1 : 1;
}
