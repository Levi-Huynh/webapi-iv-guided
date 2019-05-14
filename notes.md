

#MENU

-NPM scripts intro
-deploy an API to heroku
-make port dynamic
-use enviornment variables
-setup continuous deployment (just push code and deployed automatically )


Add a "start" script to run the server using `node`

"scripts": {
    "start": "node index.js"
  },

  -^ Done so heroku knows how to run your server.. in production want to run using node (not nodemon)
  -Each platform is diff so read DOCUMENTATION FOR YOUR Platform to know who to build the start 
  ^ nodemon in dev experience so server will restart each time we make changes (not in production experience)


-DEALING WITH DATABASES & PRODUCTION VERSUS DEPLOYMENT-- WILL NEED DEPLOYMENT KEY
-SO UPDATES ON YOUR DATABSE DURING DEPLOYMENT DOESNT SHOW UP ON DATABASE DURING PRODUCTION


###Enviornments
-Development
-Staging/Test
-Production

Have application read dynamic changes between enviornment? One node module ( there are many)  that help with this is 
#dotenv 
-ALLOWS YOU TO DEFINE KEY VALUE PAIRS, AND .env files
-yarn add dotevn
-create file in root .env
-in .env file use SCREAMING_SNAKE_CASE
-define different KEY VALUE PAIRS 
-must stop then start server (yarn server)  when make changes to key value pairs in .env file 


Install dev dependencies:

-using yarn: `yarn add nodemon --dev`