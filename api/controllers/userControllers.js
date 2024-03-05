const User = require('../models/UserModel');

const createUser = async (req, res) => {
  // const query = { email: user.email };
  try {
    const user = req.body;
    const newUser = new User(user);
    if (newUser) {
      await newUser.save();
      res.status(200).json(newUser);
    } else {
      res.status(400).json({ error: 'Invalid user data' });
    }
    // const existingUser = await User.findOne(query);
    // if (existingUser) {
    //   return res.status(302).json({ message: 'User already exists!' });
    // }
    // const result = await User.create(user);
    // res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
};
