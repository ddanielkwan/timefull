// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBZPDiHU2ydDLb0TL1jkrb-e22AbbKgzug",
      authDomain: "reminder-ac693.firebaseapp.com",
      databaseURL: "https://reminder-ac693-default-rtdb.firebaseio.com",
      projectId: "reminder-ac693",
      storageBucket: "reminder-ac693.appspot.com",
      messagingSenderId: "209630859220",
      appId: "1:209630859220:web:9a3620d9547c5926eb5041"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var user = document.getElementById('username');
var pass = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignUp');


btnLogin.addEventListener('click', e=>{
const user_value =   user.value;
const pass_value = pass.value;
const auth = firebase.auth();

const promise = auth.signInWithEmailAndPassword(user_value, pass_value);
promise.catch(e =>console.log(e.message));

if(user){
  console.log(user);
}
promise.catch(e=>alert(e.message));
console.log(firebase);


})


btnSignUp.addEventListener('click', e=>{
 email = document.getElementById('username').value;
 pass = document.getElementById('password').value;
const auth = firebase.auth();
//Create User
const promise = auth.createUserWithEmailAndPassword(email, pass);
var user = auth.currentUser;
// if correct user authentication then redirect to dashboard. 
if(user){
  console.log(user);
}
promise.catch(e=>alert(e.message));
console.log(firebase);
});

firebase.auth().onAuthStateChanged(firebaseUser=>{

if(firebaseUser){
  console.log(firebaseUser);
  location.href = "../views/authpass.html";
}else{
  console.log("Not login");
}
});

