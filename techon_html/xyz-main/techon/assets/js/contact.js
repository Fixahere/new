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