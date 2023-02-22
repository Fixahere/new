//login js star
$(document).ready(function () {

          $("#signin").click(function () {
            $("#signin_form").slideToggle();
            $("#signup_form").hide();
            $("#side_hl").slideToggle();
            $("#side_hs").hide()
          })
        })
        $(document).ready(function () {
        
          $("#for_signup").click(function () {
            $("#signup_form").slideToggle();
            $("#signin_form").hide();
            $("#side_hs").slideToggle();
            $("#side_hl").hide()
          })
        })
        
        function adduser(user) {
          let userlist = localStorage.getItem("users") || "[]";
          userlist = JSON.parse(userlist);
        
          let exists = userlist.find((item) => item.email == user.email)
        
          if (exists) {
            return false
          }
          else {
            let updatedlist = [...userlist, user];
            localStorage.setItem("users", JSON.stringify(updatedlist))
            return true
          };
        
        }
        
        function login(email, password) {
          let userlist = localStorage.getItem("users") || "[]";
          userlist = JSON.parse(userlist);
        
          let exists = userlist.find((item) => item.email == email && item.password == password)
        
          return exists
        
        }
        
        
        
        function for_signup() {
          let status = true;
          let name = document.getElementById("get_name").value;
          let name_re = /[A-Za-z]{3,}$/;
          let email = document.getElementById("email_get").value;
          let em_re = /^[\w]+@[A-Za-z]{4,5}[.][A-Za-z]{2,}$/;
          let pass = document.getElementById("passcode").value;
          let pass_re = /^[\w]{6,}$/;
        
        
        
        
          if (!name) {
            document.getElementById("get_name").style = "border:1px solid red";
            document.getElementById("alert_n").style = "color:red";
            document.getElementById("alert_n").innerHTML = "Please fill out this field!";
            status = false
          }
          else if (!name_re.test(name)) {
            document.getElementById("get_name").style = "border:1px solid red";
            document.getElementById("alert_n").style = "color:red";
            document.getElementById("alert_n").innerHTML = "Please enter valid name!";
            status = false
        
          }
          else {
            document.getElementById("get_name").style = " ";
            document.getElementById("alert_n").innerHTML = " ";
            status = true
        
          }
        
        
        
          if (!email) {
            document.getElementById("email_get").style = "border:1px solid red";
            document.getElementById("alert_em").style = "color:red";
            document.getElementById("alert_em").innerHTML = "Please fill out this field!";
            status = false
        
          }
          else if (!em_re.test(email)) {
            document.getElementById("email_get").style = "border:1px solid red";
            document.getElementById("alert_em").style = "color:red";
            document.getElementById("alert_em").innerHTML = "invalid email address!";
            status = false
        
          }
          else {
            document.getElementById("email_get").style = " ";
            document.getElementById("alert_em").innerHTML = " ";
            status = true
        
          }
        
          if (!pass) {
            document.getElementById("passcode").style = "border:1px solid red";
            document.getElementById("alert_pas").style = "color:red";
            document.getElementById("alert_pas").innerHTML = "Please fill out this field!";
            status = false
        
          }
          else if (!pass_re.test(pass)) {
            document.getElementById("passcode").style = "border:1px solid red";
            document.getElementById("alert_pas").style = "color:red";
            document.getElementById("alert_pas").innerHTML = "Please enter valid name!";
            status = false
        
          }
          else {
            document.getElementById("passcode").style = " ";
            document.getElementById("alert_pas").innerHTML = " ";
            status = true
        
          }
        
          if (status) {
            let response = adduser({
              email: email,
              username: name,
              passcode: pass
            })
        
            if (response) {
              alert("user created succesfully")
            }
            else {
              alert("user already exists")
            }
          }
        
        }
        
        
        function for_login() {
          let status = true;
          const email_add = document.getElementById("get_email").value;
          let ema_re = /^[\w]+@[A-Za-z]{4,5}[.][A-Za-z]{2,}$/;
          const passcode = document.getElementById("get_pass").value;
          let pas_re = /^[\w]{6,}$/;
        
        
          if (!email_add) {
            document.getElementById("get_email").style = "border:1px solid red";
            document.getElementById("alert_e").style = "color:red";
            document.getElementById("alert_e").innerHTML = "Please fill out this field!";
            status = false
          }
          else if (!ema_re.test(email_add)) {
            document.getElementById("get_email").style = "border:1px solid red";
            document.getElementById("alert_e").style = "color:red";
            document.getElementById("alert_e").innerHTML = "invalid email address!";
            status = false
          }
          else {
            document.getElementById("get_email").style = " ";
            document.getElementById("alert_e").innerHTML = " ";
            status = true
          }
        
        
          if (!passcode) {
            document.getElementById("get_pass").style = "border:1px solid red";
            document.getElementById("alert_p").style = "color:red";
            document.getElementById("alert_p").innerHTML = "Please fill out this field!";
            status = false
          }
          else if (!pas_re.test(passcode)) {
            document.getElementById("get_pass").style = "border:1px solid red";
            document.getElementById("alert_p").style = "color:red";
            document.getElementById("alert_p").innerHTML = "Please enter valid name!";
            status = false
          }
          else {
            document.getElementById("get_pass").style = " ";
            document.getElementById("alert_p").innerHTML = " ";
            status = true
          }
        
          if (status) {
            let response = login(email_add, passcode)
        
            if (response) {
              alert("user logged in")
            }
            else {
              alert("invalid credentials")
            }
          }
          console.log("hello")
        }
        
        
//login js end
//contact js start
function submit(){

          let name=document.getElementById("f_name").value;
        let name_re=/[A-Za-z]{3,}$/;
          let l_name=document.getElementById("l_name").value;
          let lname_re=/[A-Za-z]{3,}$/;
          let email=document.getElementById("get_email").value;
          let em_re=/^[\w]+@[A-Za-z]{4,5}[.][A-Za-z]{2,}$/;
         const phone = document.getElementById("phone").value;
         let p_re = /^[0-9]{11}$/;
          let message=document.getElementById("mess").value;
        
          
          if(!name){
              document.getElementById("f_name").style="border:1px solid red";
            document.getElementById("alert_fnam").style="color:red";
            document.getElementById("alert_fnam").innerHTML="Please fill out this field!"
          }
          else if(!name_re.test(name)){
            document.getElementById("f_name").style="border:1px solid red";
            document.getElementById("alert_fnam").style="color:red";
            document.getElementById("alert_fnam").innerHTML="Please enter valid name!"
          }
          else{
              document.getElementById("f_name").style=" ";
            document.getElementById("alert_fnam").innerHTML=" "
          }
        
          if(!l_name){
              document.getElementById("l_name").style="border:1px solid red";
              document.getElementById("alert_lnam").style="color:red;";
              document.getElementById("alert_lnam").innerHTML="Please fill out this field!"
            }
            else if(!lname_re.test(l_name)){
              document.getElementById("l_name").style="border:1px solid red";
              document.getElementById("alert_lnam").style="color:red;";
              document.getElementById("alert_lnam").innerHTML="Please enter valid name!"
            }
            else{
              document.getElementById("l_name").style=" ";
              document.getElementById("alert_lnam").innerHTML=" "
            }
          
          
          if(!email){
              document.getElementById("get_email").style="border:1px solid red";
            document.getElementById("alert_em").style="color:red";
            document.getElementById("alert_em").innerHTML="Please fill out this field!"
          }
          else if(!em_re.test(email)){
            document.getElementById("get_email").style="border:1px solid red";
            document.getElementById("alert_em").style="color:red";
            document.getElementById("alert_em").innerHTML="invalid email address!"
          }
          else{
              document.getElementById("get_email").style=" ";
            document.getElementById("alert_em").innerHTML=" "
          }
          
          
          if (!phone) {
            document.getElementById("phone").style = "border:1px solid red";
            document.getElementById("alert_phone").style = "color:red";
            document.getElementById("alert_phone").innerHTML = "Please fill out this field!";
           
          }
          else if (!p_re.test(phone)) {
            document.getElementById("phone").style = "border:1px solid red";
            document.getElementById("alert_phone").style = "color:red";
            document.getElementById("alert_phone").innerHTML = "Please enter valid name!";
        
          }
          else {
            document.getElementById("phone").style = " ";
            document.getElementById("alert_phone").innerHTML = " ";
        
          }
        
        
          if(!message){
              document.getElementById("mess").style="border:1px solid red";
            document.getElementById("alert_mes").style="color:red";
            document.getElementById("alert_mes").innerHTML="Please fill out this field!"
          }
          else{
              document.getElementById("mess").style=" ";
            document.getElementById("alert_mes").innerHTML=" "
          }
        
          if(name || l_name || email || phone || message)
        {
        document.getElementById("hi").innerHTML="sent"
        }
        else{
        document.getElementById("hi").innerHTML=" "
        }
          }
//contact js end