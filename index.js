const server = require('./api/server.js');

//below, allows PORT (variable assigned by Heroku or provide 4000)
const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
