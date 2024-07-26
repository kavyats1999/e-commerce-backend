const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

contactSchema.pre('save', async function(next) {
    if (this.id == null) {
        // Generate or assign a unique id here
        this.id = await generateUniqueId();
    }
    next();
});

const contacts = mongoose.model('contacts', contactSchema);
module.exports = contacts;

async function generateUniqueId() {
    // Logic to generate a unique ID
    // This could involve querying the database to find the highest current ID and incrementing it
    const latestContact = await contacts.findOne().sort('-id');
    return (latestContact && latestContact.id) ? latestContact.id + 1 : 1;
}
