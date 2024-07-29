const contacts=require('../Models/contactSchema')

// post contact

exports.addContactController = async (req, res) => {
    try {
        // Validate the incoming request body
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields (name, email, message) are required' });
        }

        // Generate a unique ID
        let newId = 1;
        const existingContact = await contacts.findOne().sort('-id');
        if (existingContact && !isNaN(existingContact.id)) {
            newId = existingContact.id + 1;
        }

        // Create a new contact instance with the unique ID
        const newContact = new contacts({
            id: newId,
            name,
            email,
            message
        });

        // Save the new contact to the database
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);

    } catch (err) {
        console.error(err); // Log the error for debugging purposes
        res.status(400).json({ error: 'Failed to save contact', details: err.message });
    }
};


exports.getallContactsController=async (req,res)=>{
    try{
        const allContacts=await contacts.find()
        res.status(200).json(allContacts)
    }catch(err){
        res.status(401).json(err)
    }
}