const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('../database');

const router =express.Router();
router.use(bodyParser.json());
router.use(cors());
/*
    ---------------------------------------------------------------------------------------------------------
                                            UPDATE STATUS
    ---------------------------------------------------------------------------------------------------------
    INPUT : bookid,userid, new status
    PROCESS : update the status of the book in the status table
    OUTPUT : return success message
*/
router.post('/',(req,res) =>{    

});
module.exports = router;