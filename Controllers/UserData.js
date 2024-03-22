const { User_Data } = require('../models');
const bcrypt = require('bcrypt')

const userDataController = async (req, res) => {
  try {
    const { userName, userEmail, password } = req.body;
    const hashedPass = await bcrypt.hash(password,13)
    
    const existingUser = await User_Data.findOne({ where: { userName: userName } });

    if (existingUser) {
        res.send({valid: false,userName:userName,message : 'User already exist'});
    } else {
      await User_Data.create({userName: userName, userEmail: userEmail, userPass: hashedPass});
      res.send({valid : true,userName:userName,message:'User created'});
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal server error');
  }
};

module.exports = userDataController;
