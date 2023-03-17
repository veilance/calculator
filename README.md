## Vial's Calculator

# Design Document
[Design Document.pdf](https://github.com/veilance/calculator/files/11006587/Design.Document.pdf)

# Getting Started
- run: `npm i` in both client and server folders
- run: `docker-compose up` in terminal
- run: `knex migrate:latest` to get PSQL DB up to date
- go to `localhost:3000` in browser to view the application

# Requirements
- [x] The calculator should have a browser-based user interface (ie it can be opened using a web browser)
- [x] The calculator should have a number pad with digits 0-9 and decimal point.
- [x] The calculator should have buttons for addition, subtraction, multiplication, and division.
- [x] The calculator should have a display that shows the input and the result of the calculation.
- [x] The calculator should follow the order of operations (PEMDAS).
- [x] The calculator should have a way to sign up with a username and password
- [x] The calculator should have a way to log in with username and password
- [x] The calculator should be usable with or without authentication
- [x] The calculator should have a navigation bar or panel which displays the user’s authentication status

The calculator should have the following features:
- [x] Memory functions (M+, M-, MR, MC)
- [x] Percentage function (%)
- [x] Square root function (√)
- [x] Exponential function (^)
- [x] History function

# Screen Shots
![Screen Shot 2023-03-17 at 2 33 54 PM](https://user-images.githubusercontent.com/28986205/226058182-ffbd12cb-f0c6-45fb-baa5-d5a865c62566.png)
![Screen Shot 2023-03-17 at 2 34 03 PM](https://user-images.githubusercontent.com/28986205/226058181-881844f0-3d29-49b8-be53-b26fb8b6f787.png)
![Screen Shot 2023-03-17 at 2 34 10 PM](https://user-images.githubusercontent.com/28986205/226058177-cdf1a042-4388-4905-b950-17ac41990d4e.png)
![Screen Shot 2023-03-17 at 2 34 39 PM](https://user-images.githubusercontent.com/28986205/226058174-e4c66ba7-d981-4bea-8779-ffe3fee9a227.png)
![Screen Shot 2023-03-17 at 2 35 46 PM](https://user-images.githubusercontent.com/28986205/226058170-a0e43f2e-ab0f-4fe6-be9e-8145ada8cad7.png)

# Technology
React, TypeScript, Formik, Material UI, JavaScript, Knex, Express, Node, PSQL
