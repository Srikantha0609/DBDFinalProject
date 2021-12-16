const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('../database');

const router =express.Router();
router.use(bodyParser.json());
router.use(cors());

/*
    ---------------------------------------------------------------------------------------------------
                                            UPDATE USER DATA
    ---------------------------------------------------------------------------------------------------
    INPUT : userid,email, new username, new password
    PROCESS : find the entry by userid and update the new username and password
    OUTPUT : return success
*/
router.post('/',(req,res) =>{    
    
});
module.exports = router;