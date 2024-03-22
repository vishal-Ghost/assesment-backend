const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User_Data } = require('../models');
const jwtKey = '9136330147';

const jwtAuthController = async (req, res) => {
  
    try {
    const { userName, password } = req.query;

    const result = await User_Data.findOne({
      where: {userName: userName}
    });

    if (result) {
      const passCheck = await bcrypt.compare(password, result.userPass);
      if (passCheck) {
        const token = jwt.sign(
          { userName: result.userName,userId:result.userId},
          jwtKey,
          { expiresIn: '120s' }
        );

        res.cookie('jwt', token, { 
          httpOnly: true,
          domain: 'localhost',
          path: '/',
        });

        const decodedToken = jwt.decode(token).exp
        
                return res.send({ valid: true, userData: { userName: result.userName, userId: result.userId,role:result.role }, exp:decodedToken });
      } else {
        return res.send({ valid: false, message: 'Incorrect password' });
      }
    } else {
      return res.send({ valid: false, message: 'User not found' });
    }
  } catch (err) {
    return res.send(err);
  }
};

module.exports = jwtAuthController;
