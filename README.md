# Call of Duty Statistics

The purpose of this application is to capture the statistics of players on call of duty. It is designed to work with a squad but can also be used for one player.

The main application will be implemented to store this data in document model format in MongoDB, however, requests can also be console.table logged out.

You will need to add an .env file with the following values:
ACT_SSO_COOKIE=xxxxxxxxxxx
MONGOURI=xxxxxxxxxx

The application will work in two parts:

## Add a squad member to the database
The first application will allow you to add a new squad member to the squadmates collection in your database. To do this enter the handle and platform into the addNewSquadMate.js file and run the following command:
```
node addNewSquadMate
```

## Main application
This currently gathers stats for the last 20 games for each Call of Duty title and outputs them using console.table, To run this application enter the handle and platform into the app.js file and run the following command:
```
node app
```
