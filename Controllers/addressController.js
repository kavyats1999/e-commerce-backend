const addresses = require('../Models/addressSchema');

exports.addAddressController = async (req, res) => {
    try {
        const { name, buildingname, cityname, landmark, state, postalcode, phone } = req.body;
        
        if (!name || !buildingname || !cityname || !landmark || !state || !postalcode || !phone) {
            return res.status(400).json({ error: 'All fields (name, buildingname, cityname, landmark, state, postalcode, phone) are required' });
        }

        const existingAddress = await addresses.findOne().sort('-id');
        const newId = existingAddress && !isNaN(existingAddress.id) ? existingAddress.id + 1 : 1;

        const newAddress = new addresses({
            id: newId,
            name,
            buildingname,
            cityname,
            landmark,
            state,
            postalcode,
            phone
        });

        const savedAddress = await newAddress.save();
        res.status(201).json(savedAddress);
    } catch (err) {
        console.error(err);
        res.status(400).json({ err: 'Failed to save address', details: err.message });
    }
};
