# Shoes API

### What it is used for

  *  shoe catalogue is used for accessing the shoes data in a database
     [MONGO]

### What the API allows you to do
  *  The shoe catalogue allows retreving from the database [MONGO]
  *  allow new stock/shoes to be added to the database
  *  the API allow up update of shoes that are already in the database
     by decrementing the stock for a specific shoe when the shoe is sold

### What is needed or used
 ##### PostMan 
 *   Postman is an interface for the Shoes_catalogue_API because the api 
     does not have a client side 
    
 ##### NodeJS
 *   nodeJS is run locally because it is used for JavaScript 
 
 ### Installing Dependancies
 * npm install
   * this command will install all neccessary dependancies declared in the package.Json file
 
 ### fork and cloning the Repository
 * fork the repository to your github
 * copy the repo url to your clipboard
 * open your CLI(Command Line Interface) and navigate to your projects folder
 * run this command :
 ```
 git clone [paste url here]
 ```
 * now navigate to the cloned folder and run:
 ```
 npm install
 ```
 this will install all the dependencies required for the app to run
 * run command:
 ```
 nodemon
 ```
 which will start the server and start the app on your browser
