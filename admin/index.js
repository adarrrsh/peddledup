const firebaseConfig = {
    apiKey: "AIzaSyCSZFM8iEQc2iJsnRmU7NFc3NrYzToxVXU",
    authDomain: "peddledup-3b334.firebaseapp.com",
    databaseURL: "https://peddledup-3b334-default-rtdb.firebaseio.com",
    projectId: "peddledup-3b334",
    storageBucket: "peddledup-3b334.appspot.com",
    messagingSenderId: "738597742608",
    appId: "1:738597742608:web:ffa7ac27e564499b230295",
    measurementId: "G-6BXF5YKT45"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function selectData(){
    firebase.database().ref("career-queries").once('value',function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var name = childSnapshot.val().name;
            var email = childSnapshot.val().email;
            var phone = childSnapshot.val().phone;
            var applyingFor = childSnapshot.val().applyingFor;
            addItemToTableOfCareer(name,email,phone,applyingFor);
        })
    

        
    })
    firebase.database().ref("form-queries").once("value",function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var name = childSnapshot.val().name;
            var email = childSnapshot.val().email;
            var phone = childSnapshot.val().phone;
            addItemToTableOfContact(name,email,phone);
        })
    })
    firebase.database().ref("service-queries").once("value",function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var name = childSnapshot.val().name;
            var email = childSnapshot.val().email;
            var phone = childSnapshot.val().phone;
            var package = childSnapshot.val().package;
            var customization = childSnapshot.val().customization;
            addItemToTableOfService(name,email,phone,package,customization);
        })
    })
  }
  window.onload = selectData;

  var sNo_career = 0;
  function addItemToTableOfCareer(name,email,phone,applyingFor){
        
        var tbody = document.getElementById("tbody");
        var trow = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        td1.innerHTML = ++sNo_career;
        td2.innerHTML = name;
        td3.innerHTML = phone;
        td4.innerHTML = email;
        td5.innerHTML = applyingFor;
        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
        trow.appendChild(td4);
        trow.appendChild(td5);
        tbody.appendChild(trow);
  }


var sNo_contact = 0;
function addItemToTableOfContact(name,email,phone){
    
    var tbody = document.getElementById("tbody-contact");
    var trow = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    td1.innerHTML = ++sNo_contact;
    td2.innerHTML = name;
    td3.innerHTML = phone;
    td4.innerHTML = email;
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    tbody.appendChild(trow);
}
var sNo_Service = 0;
function addItemToTableOfService(name,email,phone,package,customization){
    var tbody = document.getElementById("tbody-service");
        var trow = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        var td5 = document.createElement("td");
        var td6 = document.createElement("td");
        td1.innerHTML = ++sNo_Service;
        td2.innerHTML = name;
        td3.innerHTML = phone;
        td4.innerHTML = email;
        td5.innerHTML = package;
        td6.innerHTML = customization;
        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
        trow.appendChild(td4);
        trow.appendChild(td5);
        trow.appendChild(td6);
        tbody.appendChild(trow);
}

// Our Team Page
