// itemRoutes.js

const Item = require('../models/Item');

const express = require("express");
const app = express();
const itemRouter = express.Router();

itemRouter.route("/").get(function(req, res) {
  Item.find(function (err, itms) {
    if(err) {
      console.log(err);
    } else {
      for(var i=0; i < itms.length; i++) {
        console.log(itms[i].item);
      }
      res.render('items', {itms: itms});
    }
  });
});

itemRouter.route("/single").get(function(req, res) {
  res.render("singleItem");
});

itemRouter.route("/add").get(function(req, res) {
  res.render("addItem");
});

itemRouter.route('/add/post').post(function (req, res) {
  var item = new Item(req.body);
      item.save()
    .then(item => {
    res.redirect('/items');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

module.exports = itemRouter;
