//require dotenv first just to make sure everything has access to it
const envReader = require('dotenv');
envReader.config(); //reads .env and merges it into process.env

// require('dotenv').config();
const server = require('./api/server.js');

//below, allows PORT (variable assigned by Heroku or provide 4000). Then add commit and push changes so heroku sees it.
//WHO IS ADDING PORT VALUE?: HEROKU


const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
