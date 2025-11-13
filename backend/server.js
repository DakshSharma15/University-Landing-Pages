require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/api/universities', require('./routes/universities'));
app.use('/api/leads', require('./routes/leads'));

app.get('/', (req,res) => res.send({status:'ok', time:new Date().toISOString()}));

app.listen(port, () => console.log(`Server running on port ${port}`));
