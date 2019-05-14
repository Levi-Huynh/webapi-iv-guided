

#MENU

-NPM scripts intro
-deploy an API to heroku
-make port dynamic
-use enviornment variables
-setup continuous deployment

Add a "start" script to run the server using `node`

"scripts": {
    "start": "node index.js"
  },

  -^ Done so heroku knows how to run your server.. in production want to run using node (not nodemon)
  -Each platform is diff so read DOCUMENTATION FOR YOUR Platform to know who to build the start 
  ^ nodemon in dev experience so server will restart each time we make changes (not in production experience)

  -LET HEROKU PROVIDE PORT
  -

Install dev dependencies:

-using yarn: `yarn add nodemon --dev`