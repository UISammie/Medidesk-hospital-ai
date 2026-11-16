const express = require('express');
const bodyParser = require('body-parser');
const doctors = require('./doctors.json');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('MediDesk AI is LIVE');
});

app.post('/whatsapp', (req, res) => {
  const msg = (req.body.Body ||
    '').toLowerCase();
    let reply = "";

  if (msg.includes('hi')) {
    reply = "Welcome to Rivers State Hospital. I am MediDesk AI. Type doctors or hours or Book cardiology Monday";
  } else if (msg.includes('doctor')) {
    reply = "Doctors available: Dr Okoro cardiology, Dr Ada pediatrics";
  } else {
    reply = "Try: Book cardiology Monday";
  }

  res.set('Content-Type', 'text/xml');
  res.send("<Response><Message>" + reply + "</Message></Response>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Running on ' + PORT));