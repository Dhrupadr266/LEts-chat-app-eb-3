
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBChsMLFzSgAoWGgPYn3hINFupmvsPwO0Q",
      authDomain: "gaming-5123.firebaseapp.com",
      databaseURL: "https://gaming-5123-default-rtdb.firebaseio.com",
      projectId: "gaming-5123",
      storageBucket: "gaming-5123.appspot.com",
      messagingSenderId: "751771836954",
      appId: "1:751771836954:web:9697077d4e4d2ec7ff27a3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user=localStorage.getItem("username");
document.getElementById("username2").innerHTML="welcome to Kwitter "+user;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
      console.log("roomname is "+room_names);
      row="<div class='room_name' id="+room_names+" onclick='redirect_to_room(this.id)'>#"+room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });
});
}
getData();
function log(){
      localStorage.removeItem("username2");
      localstorage.removeItem("room_name");
      window.location="kwitter_room.html";
      
}

function addroom(){
      roomname=document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose: "addroomname"
      });
      localStorage.setItem("roomname", roomname);
      window.location="kwitter_page.html";
}
