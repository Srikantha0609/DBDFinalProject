const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('../database');

const router =express.Router();
router.use(bodyParser.json());
router.use(cors());
/*
    --------------------------------------------------------------------------------------------------
                            Rating Book Page
    --------------------------------------------------------------------------------------------------
    INPUT : Bookid, userid,rating, review
    PROCESS : Update the Rating table (or add if (userid,bookid) pair does not exist)
    OUTPUT : return success message

*/
router.post('/',(req,res) =>{    

});
module.exports = router;