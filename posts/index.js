const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts/create', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id,
    title
  };

  await axios.post('http://event-bus-srv:4005/events', {
    type: 'PostCreated',
    data: {
      id,
      title
    }
  });

  res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
  console.log('Received Event', req.body.type);

  res.send({});
});

app.listen(4000, () => {
  console.log('Listening on 4000');
});

// in chrome: http://localhost:4000/posts

// finish k8s, in postman
// localhost:30580/posts/create

// body:
// {
//   "title": "post123"
// }
// response:
// {
//   "id": "2bf8210e",
//   "title": "post123"
// }

// GET http://posts.com/posts
// {
//   "2bf8210e": {
//       "id": "2bf8210e",
//       "title": "post123",
//       "comments": []
//   }
// }