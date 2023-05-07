
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
          const ref = db.ref("service-queries");
        
          const form = document.getElementById("form-service")
          form.addEventListener("submit", (e)=>{
            const name = document.getElementById("name-5a14").value;
            const email = document.getElementById("email-5a14").value;
            const phone = document.getElementById("phone-bc29").value;
            const package = document.getElementById("select-f3ae").value;
            let customization = document.getElementById("field-89d1");
            let customizationRequired = "Yes";
            if (customization.checked) {
              customizationRequired =  "Yes";
              console.log(customizationRequired);
              
            }else{
              customizationRequired = "No"
              console.log(customizationRequired);
            }
            ref.push({
              name:name,
              email:email,
              phone:phone,
              package:package,
              customization:customizationRequired,
            });
            alert("Thanks for showing your interest we will get back to you soon!")
          })