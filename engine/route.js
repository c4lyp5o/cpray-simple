const express = require('express');
const router = express.Router();
const Cont = require('./controller');

router.get('/', Cont.comingHome);
router.get('/:zone', Cont.knowingHome);
    
module.exports = router;