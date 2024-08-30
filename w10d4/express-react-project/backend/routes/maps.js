const express = require('express');
const maps = express.Router();


const mapData = {
  "1":{name:"All the poutine", keywords:["poutine","montreal"], likes:9001},
  "2":{name:"All the sad poutine", keywords:["poutine","vancouver","not flying beaver"], likes:9001},
}

/* GET home page. */
maps.get('/', function(req, res, next) {
  return res.json(mapData)
});

maps.get("/:map_id", function(req,res,next){
  return res.json(mapData[req.params.map_id])
})

module.exports = maps;
