const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const Model = require('../model/model');

const router = express.Router()

module.exports = router;

router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        phoneNumber: req.body.phoneNumber
    })

    try {
        const savaData = await data.save();
        res.status(200).json(savaData);
    }
    catch (error) {
        if (res.status(400)) {
            res.status(400).json({message: error.message})
        }
        else if (res.status(401)) {
            res.status(401).json({message: error.message})
        }
        else if (res.status(403)) {
            res.status(403).json({message: error.message})
        }
        else if (res.status(405)) {
            res.status(405).json({message: error.message})
        }
    }
    
})

router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        if (res.status(401)) {
            res.status(401).json({message: error.message})
        }
        else if (res.status(403)) {
            res.status(403).json({message: error.message})
        }
        else if (res.status(405)) {
            res.status(405).json({message: error.message})
        }
    }
})
 
router.get('/get-employee/:ID', (req, res) => {
    res.send(req.params.ID);
})
// Patch is used for replacing a partial part of the resource. Put replaces the whole resource.
router.put('/update-employee/:ID', (req, res) => {
  res.send(req.params.ID);      
})

router.delete('/delete-employee/:ID', (req, res) => {
    res.send(req.params.ID);
}) 