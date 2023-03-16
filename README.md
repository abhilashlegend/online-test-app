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

![localhost_4200_](https://user-images.githubusercontent.com/24253084/225642754-715528f1-a20c-46d1-ab79-e751ff8dea86.png)

The Login page is also Home page that is simple and consists of email and 
password fields to login. It has form validation that notifies the user of wrong 
inputs. The user who wants to register new can register using register button.

## Sign Up Page 

![localhost_4200_ (1)](https://user-images.githubusercontent.com/24253084/225642890-8d8c58a4-9211-4598-9daa-cf9c3701e6b9.png)

The signup page consists of user details like first name, last name, email, 
phone, qualification, password. The form is built using angular reactive form 
that validates the user inputs and does validation. On submitting the form with 
valid details user is register and then can login.

## Quiz / Test Page 

![localhost_4200_dashboard](https://user-images.githubusercontent.com/24253084/225643089-28082f6c-e201-48f6-b877-f67b5bc8656b.png)

Once user logs in the user is taken to quiz / test page. The page contains 
question and options to select. Once the user selects the radio button ( option) 
the question is validated and stores the score. On answering all the questions 
user can quit / logout the test.

## Result Page

![localhost_4200_dashboard (1)](https://user-images.githubusercontent.com/24253084/225643199-27204103-b16b-44fb-a047-15f17f2d733e.png)

When the user quits the test result is displayed to the user with the score. 
