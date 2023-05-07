
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
          const ref = db.ref("career-queries");

          const form = document.getElementById("career-form");

          form.addEventListener("submit",(e)=>{
                const name = document.getElementById("name-bb9b").value;
                const phone = document.getElementById("phone-ba36").value;
                const email = document.getElementById("email-bb9b").value;
                const applyingFor = document.getElementById("select-50e2").value;

                ref.push({
                    name:name,
                    email:email,
                    phone:phone,
                    applyingFor:applyingFor
                });
                alert("Thanks for showing your interest we will get back to you soon!")
          })