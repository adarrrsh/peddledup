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
function getData(){
    // firebase.database().ref("Testimonials").once('value',function(snapshot){
    //     snapshot.forEach(function(childSnapshot){
    //         var ser = childSnapshot.val().sn0;
    //         var name = childSnapshot.val().name;
    //         var testimonials = childSnapshot.val().testimonials;
    //         addItemToPage(ser,name,testimonials);
    //     })
    // })
    firebase.database().ref("Testimonials").orderByChild("sn0").limitToLast(2).once('value',function(snapshot){
      snapshot.forEach(function(childSnapshot){
        var ser = childSnapshot.val().sn0;
        var name = childSnapshot.val().name;
        var testimonials = childSnapshot.val().testimonials;
        addItemToPage(ser,name,testimonials);
        
      })
    })
}

function addItemToPage(serial,name,testimonials){
    var docName1 = document.getElementById("name-1");
    var docName2 = document.getElementById("name-2");

    var node = document.createTextNode(testimonials);

    var docTestmonial1 = document.getElementById("testimonial-1");
    var docTestmonial2 = document.getElementById("testimonial-2");
    docTestmonial1.innerHTML = testimonials;
    docTestmonial2.innerHTML = testimonials;
    docName1.innerHTML = name;
    docName2.innerHTML = name;
   
    console.log(testimonials);
}






window.onload = function() {
    getData()
    var pageTitle = document.title;
    var attentionMessage = 'Missing you already!!';
    
    document.addEventListener('visibilitychange', function(e) {
      var isPageActive = !document.hidden;
  
      if(!isPageActive){
        document.title = attentionMessage;
      }else {
        document.title = pageTitle;
      }
    });
  };