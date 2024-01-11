const firebaseConfig = {
    apiKey: "AIzaSyCYxpZhq_IwAeNbdRhYplO13aazhkoStBo",
    authDomain: "lajeatur.firebaseapp.com",
    projectId: "lajeatur",
    storageBucket: "lajeatur.appspot.com",
    messagingSenderId: "123734508702",
    appId: "1:123734508702:web:16f6497528a56085c5278f"
  };
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a)" + user_name + ("!");
function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.datebese().ref("/").child(room_name).update({
    purpose : "adicionar sala"
    })

    localStorage.setItem("room_name", room_name);

    window.location = "lajeaturPage.html";
}

function getData() {firbase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
room_name = childKey;
console.log("Nome da Sala - " + room_name);
row = "<div class='room_name' id"+room_name+" onclik='redirectToRomm_name(this.id)'>#"+ eomm_name +"</div><hr>";
document.getElementById("output").innerHTML += row;
    });
  });

}   
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "lajeaturPage.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}