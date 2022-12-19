const express = require('express');
const config = require('config');
const {connect} = require('mongoose');

const app = express();

app.use(express.json({ extended: true }));
app.use('/api/comments', require('./routes/comments.routes'));

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