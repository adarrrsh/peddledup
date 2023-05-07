
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
        
          const db = firebase.database();
          const ref = db.ref("form-queries");
          
  
          const form = document.getElementById("contact-form");
          const button = document.getElementById("submit-btn");


          form.addEventListener("submit",(e)=>{
            e.preventDefault();
           
           
            const name = document.getElementById("name-5a14").value;
            const email = document.getElementById("email-5a14").value;
            const phone = document.getElementById("phone-ede7").value;
            
            ref.push({
              name:name,
              email:email,
              phone:phone
            })
  
            alert("Thanks for showing your interest we will get back to you soon!")
            
          })
          