# Call of Duty Statistics

This application is being created as a showcase of web technologies and area to learn and improve.

## Purpose

The purpose of this application is to capture statistics of a squad of players on Call of Duty (Warzone, Modern Warfare, Black Ops and Vanguard) which can be analysed and queried.

## Tech Stack

The technology stack of the application will change as the application develops but is currently as follows:

- MongoDB - Data storage and querying.
- Mongoose - Data validation via schema/models.
- NodeJS - Backend split into modules which can be shared between a number of applications and micro-services.
- AWS Lambda & EventBridge - Application set up to capture data scheduled for every 2 hours.
- AWS S3 Bucket - File Storage.
- Express - Framework providing REST endpoints allowing front and back end to talk to one another.
- React Application - Front end to display and select queries to be run.

## Steps

### Prerequisites

You will need NodeJS installed on your machine and yarn or npm before running the installation:

```
yarn install
```

Depending on the modules you want to make use of you will need an .env file with the following keys and values:

| Key | Description 
| --- | --- 
| ACT_SSO_COOKIE | Used to authenticate all requests made using the call-of-duty-api package (can be found in the cookies when logged in to https://my.callofduty.com)
| MONGOURI | Your MongoDB URI containing your database, server, username and password 
| AWSS3BUCKET | The name of your AWS S3 Bucket
| AWSS3KEY | The Key for your AWS S3 Bucket
| AWSS3SECRET | THe secret key fo your AWS S3 Bucket

### Add a new squad mate

Before you can capture data about your squad you will first need to add members. You can do this by entering the user handle and platform(e.g: 'baskey x' and 'xbl') into addNewSquadMate.js and running the following command:

```shell
node addNewSquadMate
```

The user will then be entered into the squadmates collection. 

I've stored their 'uno' id as this will be the same regardless of if the user changes any of their handles.

## Schedule data capture

Once you've entered your team members into the squadmates collection you are then able to start capturing data on them. This is done by running the code in dataPush.js. Within this application I'm exporting this function into index.js and have a Lambda function set up to run every two hours using EventBridge. This will push every combat entry into the plays collection.

After pushing the combat data on each of the squadmates a distinct call is made on the game, map and mode fields to find out all distinct values entered across all records in the collection. This filter data is then saved in .json format as a file on the S3 bucket (filter.json).

I've gone for this approach to ensure we aren't making unnecessary or duplicate requests to the database for this information.