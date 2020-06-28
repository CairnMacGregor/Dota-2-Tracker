const express = require('express');
const router  = express.Router();
const fetch = require('node-fetch');


//GET THE ACCOUNT ID
router.get('/', async (req, res) => {
    try {
     


        const response = await fetch(
        `${process.env.TRACKER_API_URL}/proPlayers`
        );

        const data = await response.json();

        if(data.errors && data.errors.length > 0){
            return res.status(404).json({
                message: "Profile not found"
            });
        }
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Server Error' })
    }
    
});

module.exports = router;