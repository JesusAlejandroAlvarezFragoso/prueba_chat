const
	{ io } = require('../../server'),
	{ uc4 } = require('../uc/uc4'),
	express = require('express'),
	router = express.Router()
;

router.get('/getTotalUsers', async (req, res)=>{
	res.send(
		await uc4(io)
	);
});

module.exports = router;
