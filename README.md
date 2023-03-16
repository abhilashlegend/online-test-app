# Online Test App

Online Test App is a Angular 15 Based web Application suitable for recruitment 
team to take test of the candidates coming for interviews. Candidates can 
register, login and take tests. After the test the candidates score will be given 
on results page. 

 Check out Live Preview [here](https://abhi-online-test-app.vercel.app/)

## Problem Statement

As the project is progressing, the management has asked you to create an online test application in order to help the recruitment team take online tests of the candidates coming for interviews.

## Technology Used

* Visual Studio Code
* HTML / CSS
* JavaScript
* TypeScript
* Angular
* Bootstrap 5
* NodeJS
* GitHub


## Installation Instructions

Go to the project folder and open command prompt. Type npm install command to install the 
necessary packages and run “npm start” command to start the app on local 
server. The server angular server will be hosted on http://localhost:4200 

You would also need to download json server available at 
https://github.com/abhilashlegend/online-test-app-api.git . You can run the 
json server by going to folder and running “npm start” and json-server will be 
hosted on http://localhost:3000. 
Users who do not want to download and run locally, can checkout the demo 
online at https://abhi-online-test-app.vercel.app/


## Login / Home Page 

The Login page is also Home page that is simple and consists of email and 
password fields to login. It has form validation that notifies the user of wrong 
inputs. The user who wants to register new can register using register button.

## Sign Up Page 

The signup page consists of user details like first name, last name, email, 
phone, qualification, password. The form is built using angular reactive form 
that validates the user inputs and does validation. On submitting the form with 
valid details user is register and then can login.

## Quiz / Test Page 

Once user logs in the user is taken to quiz / test page. The page contains 
question and options to select. Once the user selects the radio button ( option) 
the question is validated and stores the score. On answering all the questions 
user can quit / logout the test.

## Result Page

When the user quits the test result is displayed to the user with the score. 