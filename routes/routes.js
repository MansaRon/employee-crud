const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const router = express.Router()

module.exports = router;

router.post('/post', (req, res) => {
    res.send('New Employee Added');
})

router.get('/get-all-employees', (req, res) => {
    res.send('Getting All Employees');
})

router.get('/get-employee/:ID', (req, res) => {
    res.send(req.params.ID);
})
// Patch is used for replacing a partial part of the resource. Put replaces the whole resource.
router.put('/update-employee/:ID', (req, res) => {
  res.send('Update employee with ID.....');      
})

router.delete('/delete-employee/:ID', (req, res) => {
    res.send('Delete employee with ID....');
})