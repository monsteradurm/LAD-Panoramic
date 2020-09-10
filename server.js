const express = require("express")
const app = express()
const port = 80
const path = require('path');

app.use(express.static(path.join(__dirname, '/views')));
app.use('/images', express.static(path.join(__dirname, '/images')));

app.set('view engine', 'ejs');

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
  
app.listen(port, () => console.log(`Example app listening on port ${port}!`))