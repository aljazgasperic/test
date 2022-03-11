//#region <requires>
var express = require('express');
var router = express.Router();
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
require('dotenv/config');
const {bodySchema, BodyModel} = require('./schema');
//#endregion

//#region <mongo connect>
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log('Connected to DB.')
);
// mongo_pass = "h4E7JADVwZxvwkC"
//#endregion

//#region <vsa telesa>
router.get('/getBodies', async (req, res)=> {
  
  try{
    const bodies = await BodyModel.find();
    console.log(bodies);
    res.status(200).send(bodies);
  } catch(err){
    res.status(400).send({message: err});
  }
});
//#endregion

//#region <dodaj novo telo>
router.post('/newBody', async (req, res) => {
  var podatki = req.body;
  console.log(podatki);
  let telo = BodyModel(podatki);
  const save = await telo.save();
  res.sendStatus(200);
});
//#endregion

//#region <specificno telo>
router.get('/getBody/:id', async (req, res)=> {
  var _id = req.params.id;

  try{
    const body = await BodyModel.findById({_id: _id});
    res.status(200).send(body);
  } catch(err){
    res.json({message: err});
  }
});
//#endregion

//#region <izbris telesa>
router.delete('/deleteBody/:id', async (req, res)=>{
  var id = req.params.id;

  try{
    var izbris = await BodyModel.findByIdAndRemove({_id: id});
    res.send(izbris);
  } catch(err){
    res.json({message : err})
  }

});
//#endregion

module.exports = router;