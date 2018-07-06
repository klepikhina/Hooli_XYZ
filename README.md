# Hooli XYZ - Software Dev Project
---------------------
*About*
---------------------
Hooli XYZ intends on creating a version control product specifically for CU students. This web application would require a colorado.edu email address to sign up and would allow students taking CSCI courses to store and collaborate their code with each other.

The main function of the application is to store code either temporarily or permanently on the cloud. The secondary function of the site is to give users a friendly UI to access a running image of the latest CU Boulder VM remotely in order to test their code. The third function of this app is to allow students to share code with each other, but only with permission from the creator.

*Repo Organization*
---------------------
![Diagram of Repo Organization](https://github.com/klepikhina/Hooli_XYZ/blob/master/diagram.png)

*How to Build/Run Hooli XYZ*
---------------------
Be sure to have node, npm, and mysql up and running on your local system.

1. Clone the repo

git clone https://github.com/klepikhina/Hooli_XYZ.git

2. Navigate to home directory

3. Go to the config.js file in the server folder. Change your database information to match your system.

4. Build the database and install the node-modules. Make sure you have a recent version of nodejs and npm installed

  npm run build

Enter your password when prompted. This will destroy any previous instance of the HooliXYZ database in the system and create a new one.

5. Start the Server

  
  npm start

Navigate to localhost:8001

*How to Run Tests*
---------------------
The tests from this app are run with Mocha and executed within the test folder. To add a new test, navigate to the test folder and add your test to tests.js. To run the tests, make sure the server is running and in a separate terminal (in the project directory) run: “npm run test”.
