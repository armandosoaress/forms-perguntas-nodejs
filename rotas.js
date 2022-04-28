const express = require ('express');
const app = express();
const router = express.Router();

router.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

  module.exports = {
    router
    }