const express = require('express');
const config = require('config');
const {connect} = require('mongoose');
const path = require("path");

const app = express();

app.use(express.json({ extended: true }));
app.use('/api/comments', require('./routes/comments.routes'));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  })
}

const PORT = config.get('port') || 8080;

async function start() {
  try {
    await connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log('Server error', e.message);
    process.exit(1);
  }
}

start()

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));