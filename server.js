const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function sendFonnte(target, data) {
  const options = {
    url: 'https://api.fonnte.com/send',
    method: 'POST',
    json: true,
    body: {
      target: target,
      message: data.message,
      url: data.url,
      filename: data.filename,
    },
    headers: {
      Authorization: 'iA+BkdZMI_uMvXI_1!T5',
    },
  };

  request(options, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      console.log(body);
    } else {
      console.error(`Error: ${error}`);
    }
  });
}

app.get('/webhook', (req, res) => {
  res.send('Webhook is up and running!');
});

app.post('/webhook', (req, res) => {
  const data = req.body;
  const sender = data.sender;
  const message = data.message;

  let reply;

  if (message === 'test') {
    reply = {
      message: 'working great!',
    };
  } else if (message === 'testing') {
    reply = {
      message: JSON.stringify(data),
    };
  } else {
    reply = {
      message:
        "Sorry, I don't understand. Please use one of the following keywords: Test, Audio, Video, Image, File",
    };
  }

  sendFonnte(sender, reply);

  res.end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
