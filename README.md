# Shoes API

# Contents

* What the app is used for
* What the API allows you to do
* What is needed to make the app run
* Dependancies
* How to install
* Heroku
* Issues
* How to run the API locally

### What it is used for

  *  Shoe catalogue API is used for accessing the shoes data in a database[MONGO]
  *  Finding shoes with a specific size
  *  Filtering shoes with a specific brand
  *  Filtering the shoe size and shoe brand
  *  Decrementing the shoe stock when a shoe is sold


### What the API allows you to do
  *  The shoe catalogue API allows retreving from the database [MONGO] of all shoes
  *  Allow new shoes to be added to the database
  *  Allows filtering of data like finding a specific size or brand or both size and brand
  *  The API allow up update of shoes that are already in the database
     by decrementing the stock for a specific shoe when the shoe is sold

### Prerequisites
 ##### PostMan
 go to [Postman](https://www.getpostman.com/) to download
 *   Postman is an interface for the Shoes_catalogue_API because the api
     does not have a client side interface yet

 ##### NodeJS
 go to [NodeJS](https://nodejs.org/en/) to downlaod
 *   nodeJS is run locally because it is used for JavaScript

 ##### MongoDB
  go to [Mongo](https://www.mongodb.com/) to download
 *   MongoDB is the database where all information of shoes are stored

 ##### Heroku
 go to[Heroku](https://www.heroku.com/) to Sign-up

 ###Nodemon
 go to [nodemon](https://nodemon.io/) for more detail and how to install

## Issues
There are no "GET" route for creating and posting shoes to the database[mongo]

 ### fork and cloning the Repository
 * fork the repository to your github
 * copy the Repository url to your clipboard
 * open your CLI(Command Line Interface) and navigate to your projects folder
 * run this command :
 ```
 git clone https://github.com/shannonsn/shoes_api
 ```
 * now navigate to the cloned folder and run:
 ### Installing Dependancies
 run:
 ```
* npm install
```
   * this command will install all neccessary dependancies declared in the package.Json file

 this will install all the dependencies required for the app to run
 * run command:
 ```
 nodemon
 ```
 which will start the server and start the app on your browser
