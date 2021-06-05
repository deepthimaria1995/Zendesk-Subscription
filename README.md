# Zendesk-Coding-Challenge - Submission

An application that is written in javascript using the Node.js runtime to create an application for purchasing a subscription.

## Prerequisite Installations

- [NodeJS](https://nodejs.org/en/) v14.17.0 or greater
- NPM v6.14.13.0 or greater (At the time of making this documentation, NPM comes with the Node.js installation)

## How to run

- Download the repository to your local machine with the following code.\
$ git clone https://github.com/deepthimaria1995/Zendesk-Coding-Challenge

- Navigate to the Zendesk-Coding-Challenge repository directory in your Terminal.Install all npm modules with the following code.\
$ npm install

- Start server from console with command. That will give you a link to access the webpage.\
$ npm start

- Your index.html page will be available on URL http://localhost:5000/

### Main Component Description

- ```app.js``` : Program entry point, prime implementation and controls the flow of the program.
- ```Subscription.js``` : Creates the subscription UI layout.
- ```UtilityHelper.js``` : Functions which deal with the error,show/hide of DOM elements.
- ```PlanDetails.js``` : Containes the Plan details of the subscription of the product.

### Further Enhancement
- https://github.com/deepthimaria1995/Zendesk-Coding-Challenge -> This project includes disabling of Update Subscription button if invalid seat count is given(non numeric values). The program throws an error inside a pop up box.
- https://github.com/deepthimaria1995/Zendesk-Coding-Challenge-1 -> This project includes future enhancements which support multiple currency.


