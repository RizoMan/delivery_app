const UserRole = require('../models/Users/UserRole');
const User = require('../models/Users/User');
const router = require('express').Router();

// Get route entrys
router.get('/', async (req, res) => {
    const { id } = req.body;
    const role = await UserRole.findOne({ _id: id });

    if (!role) return res.status(400).json({ message: "Role not found" });

    res.json({ message: role });
});

// Save new Role Types
router.post('/add', async (req, res) => {
    const { typeId, name, description } = req.body;
    const newRole = new UserRole({
        typeId,
        name,
        description
    });
    const savedRole = await newRole.save()
        .then(res => res.status(200).json({ res }))
        .catch(err => res.status(400).json({ message: err }))
});

// GetAllUsers
router.get('/all', async (req, res) => {
    //const { name } = req.body;
    const users = await User.find().populate('role');

    const role = await UserRole.findOne({ _id: "5f2f913fa2895a1eb0979189"});

    console.table(users);

    res.json(users);
    // if (!role) return res.status(400).json({ message: "Role not found" });
});

module.exports = router;