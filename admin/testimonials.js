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
   
    firebase.database().ref("Testimonials").orderByChild("sn0").limitToLast(1).once('value',function(snapshot){
        snapshot.forEach(function(childSnapshot){
          var testimonials = childSnapshot.val().testimonials;
          var ser = childSnapshot.val().sn0;
          Checking(ser);
        })
      })
    function Checking(ser){
        console.log(ser)
        const name = document.getElementById("name").value;
        const testimonials = document.getElementById("testimonials").value;
        var sn0 = ser
        var ser = ++sn0;
        firebase.database().ref("Testimonials").push({
            sn0:ser,
            name:name,
            testimonials:testimonials,
        });
    }
    
})
