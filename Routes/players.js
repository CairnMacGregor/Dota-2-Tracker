const express = require('express');
const router  = express.Router();
const fetch = require('node-fetch');


//GET THE ACCOUNT ID
router.get('/:account_id', async (req, res) => {
    try {
     

        const { account_id } = req.params;

        const response = await fetch(
        `${process.env.TRACKER_API_URL}/players/${account_id}`
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

//GET THE WIN/ LOSS RATIO
router.get('/:account_id/wl', async (req, res) => {
    try {
     

        const { account_id } = req.params;

        const response = await fetch(
        `${process.env.TRACKER_API_URL}/players/${account_id}/wl`
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
//GET THE RECENT MATCHES PLAYED BY PLAYER
router.get('/:account_id/recentMatches', async (req, res) => {
    try {
     

        const { account_id } = req.params;

        const response = await fetch(
        `${process.env.TRACKER_API_URL}/players/${account_id}/recentMatches`
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