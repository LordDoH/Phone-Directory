const express = require('express');

const {expressConfig} = require('./config/express');
const routes = require('./routes');

const app = express();

expressConfig(app)


const PORT = 8080;

// Start server
app.listen(PORT, ()=>{
  // Routes
  routes(app);

  console.log(`Server running 🐱‍💻 at http://localhost:${PORT}/`)
});

module.exports = app;