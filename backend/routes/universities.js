const express = require('express');
const router = express.Router();
const data = require('../data/universities.json');

// Get all universities details 
router.get('/', (req, res) => {
  const list = data.universities.map(u => ({id: u.id, name: u.name}));
  res.json({ count: list.length, universities: list });
});

// Get details of a specific university
router.get('/:id', (req, res) => {
  const uni = data.universities.find(u => u.id === req.params.id);
  if (!uni) return res.status(404).json({error:'Not found'});
  res.json(uni);
});

// Get course-wise fees for a specific university
router.get('/fees/:id', (req, res) => {
  const uni = data.universities.find(u => u.id === req.params.id);
  if (!uni) return res.status(404).json({error:'Not found'});
  const fees = uni.courses.map(c => ({code: c.code, name: c.name, feeRange: c.feeRange}));
  res.json({ universityId: uni.id, fees });
});

module.exports = router;
