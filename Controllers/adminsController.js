const admins=require('../Models/adminsSchema')
// Controller to add admin login
exports.addAdminLoginController = async (req, res) => {
    try {
        const allowedUsername = 'admin123'; // Replace with your specific username
        const allowedPassword = '123456'; // Replace with your specific password

        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: 'All fields (username, password) are required' });
        }

        if (username !== allowedUsername || password !== allowedPassword) {
            return res.status(403).json({ error: 'Unauthorized' });
        }

        // Check if the admin user already exists
        const existingAdmin = await admins.findOne({ username: allowedUsername });
        if (!existingAdmin) {
            const admin = new admins({
                username: allowedUsername,
                password: allowedPassword
            });

            await admin.save();
            return res.status(201).json({ message: 'Admin user created' });
        } else {
            return res.status(200).json({ message: 'Login successful' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error', details: err.message });
    }
};