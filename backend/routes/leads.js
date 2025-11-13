const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const axios = require('axios');

const leadValidators = [
  body('fullName').isLength({min:2}),
  body('email').isEmail(),
  body('phone').matches(/^\d{10}$/),
  body('state').notEmpty(),
  body('course').notEmpty(),
  body('intakeYear').isInt({min:2024,max:2030}),
  body('consent').isBoolean().custom(v => v===true)
];

router.post('/', leadValidators, async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const pdUrl = process.env.PIPEDREAM_URL;
    const r = await axios.post(pdUrl, { lead: req.body, receivedAt: new Date().toISOString() });
    res.json({ success:true, pdStatus: r.status, message:'Lead forwarded' });
  } catch(err) {
    res.status(502).json({ error:'Failed to forward to Pipedream', details: err.message });
  }
});

module.exports = router;
