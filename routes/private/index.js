const express = require('express'),
router  = express.Router();

router.get('/', (req, res) => {
  res.redirect('/'); // they made it!
});

module.exports = router;
