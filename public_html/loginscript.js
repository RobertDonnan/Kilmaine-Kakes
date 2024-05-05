/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

/* global firebase */

// Your web app's Firebase configuration
 firebaseConfig = {
   apiKey: "AIzaSyD7ItMY1xQv2LPy3xUVBB3r1ZuicUsJVUo",
  authDomain: "kilmaine-kakes.firebaseapp.com",
  databaseURL: "https://kilmaine-kakes-default-rtdb.europe-west1.firebasedatabase.app/",
 projectId: "kilmaine-kakes",
  storageBucket: "kilmaine-kakes.appspot.com",
  messagingSenderId: "377585231574",
  appId: "1:377585231574:web:4c029e862aeedf3ba2cb77",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize variables
const auth = firebase.auth();


// Function for login
function loginUser () {
  //Variables for getting user data
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;

  // Validate input fields to ensure no data is missing
  if (validate_email(email) === false || validate_password(password) === false) {
    alert('Email or Password is missing');
    return;
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser;

    // If user is signed in successfully, they are directed to home page.
    window.location.href = "home.html";

  })
  .catch(function(error) {
    // Firebase code for handling errors
    var error_code = error.code;
    var error_message = error.message;

    alert(error_message);
  });
  
  
// Validating user input
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) === true) {
    // Email is good
    return true;
  } else {
    // Email is not good
    return false;
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_field(field) {
  if (field === null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
  }
}


