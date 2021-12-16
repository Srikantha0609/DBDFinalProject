const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('../database');

const router =express.Router();
router.use(bodyParser.json());
router.use(cors());
/*
    -------------------------------------------------------------------------------------------------------
                                    BOOK DETAILS PAGE
    -------------------------------------------------------------------------------------------------------
    INPUT: bookid
    PROCESS : Querry the database and output all details of the book with given book id
    OUTPUT : ALL book details object {bookid,bookname,bookcover,bookAverageRating,bookrating,bookReview}
*/

router.post('/',(req,res) =>{    
    
});
module.exports = router;