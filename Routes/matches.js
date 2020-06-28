const express = require('express');
const router  = express.Router();
const fetch = require('node-fetch');


//GET THE MATCH VIA IT'S ID
router.get('/:match_id', async (req, res) => {
    try {
     

        const { match_id} = req.params;

        const response = await fetch(
        `${process.env.TRACKER_API_URL}/matches/${match_id}`
        );

        const data = await response.json();

        if(data.errors && data.errors.length > 0){
            return res.status(404).json({
                message: "Match"
            });
        }
        res.json(data);
        
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Server Error' })
    }
    
});




module.exports = router;