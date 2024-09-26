const express = require('express');
const router = express.Router();

const { contect, apply, getApplications } = require('../controllers/index'); 

router.post('/contact', contect);
router.post('/applyjob', apply);
router.get('/getapplyjob', getApplications);



module.exports = router;
