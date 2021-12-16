const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('../database');

const router =express.Router();
router.use(bodyParser.json());
router.use(cors());


/*
    --------------------------------------------------------------------------------------------------
                                SEARCH BOOKS
    --------------------------------------------------------------------------------------------------

    INPUT :     book name (may not be exactly as in database)(filter details if exists else none)
    PROCESS:    select all the books that resembles the regex given by the input
    OUTPUT :    return a list where each element is a json containing {bookid,bookname,bookcover,authorname}
*/
router.post('/',(req,res) =>{    

});
module.exports = router;