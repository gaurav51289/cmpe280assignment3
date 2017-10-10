var express = require('express');
var router = express.Router();

/* GET items listing. */
router.get('/sofas', function(req, res, next) {

  var sofas = [{
      url:'./images/items/sofa1.png',
      name: 'Green Sofa',
      desc: 'Awesome sofa in green color.',
      price: '$899'
  },{
      url:'./images/items/sofa2.png',
      name: 'Red Sofa',
      desc: 'Awesome sofa in red color.',
      price: '$799'
  },{
      url:'./images/items/sofa3.png',
      name: 'Black Sofa',
      desc: 'Awesome sofa in black color.',
      price: '$599'
  }];

  res.send(sofas);
});

router.get('/tvmedia', function(req, res, next) {

    var tvmedia = [{
        url:'./images/items/sofa1.png',
        name: 'Green Sofa',
        desc: 'Awesome sofa in green color.',
        price: '$899'
    },{
        url:'./images/items/sofa2.png',
        name: 'Red Sofa',
        desc: 'Awesome sofa in red color.',
        price: '$799'
    },{
        url:'./images/items/sofa3.png',
        name: 'Black Sofa',
        desc: 'Awesome sofa in black color.',
        price: '$599'
    }];

    res.send(tvmedia);
});

module.exports = router;
