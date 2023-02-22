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
  
  