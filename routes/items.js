var express = require('express');
var router = express.Router();

/* GET items listing. */
router.get('/sofas', function(req, res, next) {

  var sofas = [{
      id: 0,
      url:'./images/items/sofa1.png',
      name: 'Green Sofa',
      desc: 'This sofa is comfortable regardless if you want to sit, lean back or lie down. The loose back cushions make it easy to adjust the seat depth and the back support.',
      price: '$899'
  },{
      id: 1,
      url:'./images/items/sofa2.png',
      name: 'Red Sofa',
      desc: 'The cover is easy to keep clean as it can be wiped clean with a damp cloth..',
      price: '$799'
  },{
      id: 2,
      url:'./images/items/sofa3.png',
      name: 'Black Sofa',
      desc: 'Seat cushions have a layer of memory foam that softly follows the contours of your body and gives comfortable support where needed..',
      price: '$599'
  },{
      id: 3,
      url:'./images/items/sofa4.png',
      name: 'Antique Sofa',
      desc: 'The outer surfaces are covered in a durable coated fabric with the same look and feel as leather.',
      price: '$599'
  }];

  res.send(sofas);
});

router.get('/chair', function(req, res, next) {

    var chair = [{
        id:4,
        url:'./images/items/chair1.png',
        name: 'Grey Cushion Armchair',
        desc: 'Relaxing cushion armchair in light grey.',
        price: '$119'
    },{
        id:5,
        url:'./images/items/chair2.png',
        name: 'Royal Blue Armchair',
        desc: 'Relaxing cushion armchair in royal blue color.',
        price: '$129'
    },{
        id:6,
        url:'./images/items/chair3.png',
        name: 'Maroon Armchair',
        desc: 'Relaxing cushion armchair in maroon color.',
        price: '$115'
    },{
        id:7,
        url:'./images/items/chair6.png',
        name: 'Antique looking chair',
        desc: 'Antique looking chair for living room.',
        price: '$149'
    }];

    res.send(chair);
});

router.get('/sides', function(req, res, next) {

    var sides = [{
        id:8,
        url:'./images/items/table1.png',
        name: 'Wooden Brown Table',
        desc: 'Wooden Side Table.',
        price: '$219'
    },{
        id:9,
        url:'./images/items/table2.png',
        name: 'Beige Table',
        desc: 'Wooden table in Beige in a stylish form.',
        price: '$399'
    },{
        id:10,
        url:'./images/items/table3.png',
        name: 'Woody Coffee Table',
        desc: 'Wooden Table that contains more space.',
        price: '$599'
    },{
        id:11,
        url:'./images/items/table4.png',
        name: 'Side Table',
        desc: 'Steel, Pigmented epoxy/polyester powder coating.',
        price: '$299'
    }];

    res.send(sides);
});

router.get('/light', function(req, res, next) {

    var light = [{
        id:12,
        url:'./images/items/lamp1.png',
        name: 'Hektar Floor lamp',
        desc: 'The oversized lamp head gives both a good concentrated light for reading and good general light for smaller areas.',
        price: '$49.99'
    },{
        id:13,
        url:'./images/items/lamp2.png',
        name: 'Stylish Floor Lamp',
        desc: 'Gives a soft glowing light, that gives your home a warm and welcoming atmosphere.',
        price: '$39.9'
    },{
        id:14,
        url:'./images/items/lamp8.png',
        name: 'Angland Floor Lamp',
        desc: 'You can create a soft, cozy atmosphere in your home with a textile shade that spreads a diffused and decorative light.',
        price: '$59.9'
    },{
        id:15,
        url:'./images/items/lamp7.png',
        name: 'Alang Floor Lamp',
        desc: 'The height is adjustable to suit your lighting needs.',
        price: '$34.99'
    }];

    res.send(light);
});

module.exports = router;
