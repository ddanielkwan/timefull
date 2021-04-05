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

  firebase.auth().onAuthStateChanged(firebaseUser=>{

    if(firebaseUser){
      console.log(firebaseUser);
    }else{
      console.log("Not login");
    }
    });

    function writeNewPost(note, timestap, title, reminder) {
        const user = firebase.auth().currentUser;
        uid = user.uid;
        // A post entry.
        var postData = {
          title: title,
          time: timestap,
          note: note,
          reminder: reminder
        };
      
        
      
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/user-posts/' + uid + '/' + title] = postData;
        location.reload();
        return firebase.database().ref().update(updates);
        
      };

    function today(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        today = mm+'-'+dd+'-'+yyyy;
        return today;
    };

    function post(){
        date = today();
        reminder = document.getElementById("reminder").value;
        if((reminder == "MM-DD-YYYY") || (reminder == null) || reminder == ""){
            reminder = "None";
        }
        note = document.getElementById("note").value;
        topic = document.getElementById("topic").value;
        writeNewPost(note, date, topic, reminder);
        console.log("Sent!");
    };

    function clean_clear(){
        console.log("here");
        const user = firebase.auth().currentUser;
        uid = user.uid;
        let userRef = firebase.database().ref('/user-posts/'+uid);
        userRef.remove()
        location.reload();
    };

    function introduction(){
        document.getElementById("date_time").innerHTML = today() + "\n"+"Welcome, "+firebase.auth().currentUser.email;
    };

    window.onload = function() {
        document.getElementById("date_time").innerHTML = today();
    };

    function del_one_only(){
        var topic = document.getElementById("delete_title").value;
        const user = firebase.auth().currentUser;
        uid = user.uid;
        let userRef = firebase.database().ref('/user-posts/'+uid+"/"+topic);
        userRef.remove()
        location.reload();
    };

    function logout_btn(){
      firebase.auth().signOut();
      console.log("Bye!");
      console.log(firebase);
      location.href = "../views/index.html";
    }