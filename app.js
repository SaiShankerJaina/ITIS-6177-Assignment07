var express = require('express');
const axios = require('axios');
var app = express();

const port = 3000;

app.get('/say', async (req, res) => {
    const keyword = req.query.keyword;
    try {
      const response = await axios.get('https://lafbe30wa9.execute-api.us-east-1.amazonaws.com/say', {
        params: { keyword: keyword },
      });
  
      res.status(200).send(response.data);
    } catch (error) {
      res.status(500).send('Error in forwarding request: ' + error.message);
    }
  });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });