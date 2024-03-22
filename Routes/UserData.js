const express = require('express');
const userDataController = require('../Controllers/UserData');
const Router = express.Router();
const multer = require('multer');
const LogoutController = require('../Controllers/Logout');

Router.route('/userData').post(multer().none(),userDataController)
Router.route('/logOut').post(LogoutController)


module.exports = Router