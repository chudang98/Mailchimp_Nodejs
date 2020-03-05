const express = require('express');

const router = express.Router();

router.route('/').get((req, res) => {
  res.end('Hello from API Router');
});

module.exports = router;
