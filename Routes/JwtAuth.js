const express = require('express');
const jwtAuthController = require('../Controllers/jwtAuth');
const Router = express.Router();
const multer = require('multer')

Router.route('/login').get(multer().none(),jwtAuthController)

module.exports = Router