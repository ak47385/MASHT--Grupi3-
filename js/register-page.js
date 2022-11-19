var pass = document.querySelector(".user-input-wrp #user-password");
var confirmpass = document.querySelector(".user-input-wrp #confirm-password");
var username = document.querySelector(".user-input-wrp #user-name");
var lastname = document.querySelector(".user-input-wrp #user-lastname");
var email = document.querySelector(".user-input-wrp #user-email");

function redirectpage(){
  if( username.value ==="" || lastname.value ==="" || email.value ==="" || pass.value ==="" ||confirmpass.value ===""){
    alert("Ju lutem plotesohni te gjitha fushat")
  } else{
    location.replace("./description-page.html")
  }
}


function showhidepassword(){
    if (pass.type === "password" || confirmpass.type === "password") {
        pass.type = "text";
        confirmpass.type ="text"
    } else {
      pass.type = "password";
      confirmpass.type ="password";
    }
}

function showRule(){
  var rule=document.querySelector('.password-rule');
  rule.style.display="block";
  rule.style.marginLeft="5px";
}