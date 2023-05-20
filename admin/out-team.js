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

const buttonSubmit = document.getElementById("btn-submit");

buttonSubmit.addEventListener("click", function(){
    const nameEmp = document.getElementById("name").value;
    const designation = document.getElementById("designation").value;
    const introduction = document.getElementById("introduction").value;
    const twitter = document.getElementById("twitter").value;
    const instagram = document.getElementById("instagram").value;
    const linkedin = document.getElementById("linkedin").value;
    firebase.database().ref("our-team").push({
        name:nameEmp,
        designation:designation,
        introduction:introduction,
        twitter:twitter,
        instagram:instagram,
        linkedin:linkedin
    });

})

// frontend

 