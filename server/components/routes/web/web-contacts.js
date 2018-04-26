/*jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const settings = require('../../utils/settings');
const webContactController = require('../../controllers/web/webContactController.js');

router.get('/', webContactController.list);
router.post('/create', webContactController.create);
router.get('/:contact_id', webContactController.read);
router.post('/submit', webContactController.submit);
//router.get('/delete/:contact_id', contactController.delete);

module.exports = router;