const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('../database');

const router =express.Router();
router.use(bodyParser.json());
router.use(cors());
/*
    -----------------------------------------------------------------------------------------------------------
                                    FETCH BOOK BY STATUS                            
    -----------------------------------------------------------------------------------------------------------
    INPUT : status class name and userid
    PROCESS : Find all the books belong to the particular status of that particular user and return those book 
                details
    OUTPUT : return a list where each element is a json containing {bookid,bookname,bookcover,authorname}
*/


router.post('/',(req,res) =>{    

});
module.exports = router;