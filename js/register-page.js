function showhidepassword(){
    var pass = document.querySelector(".user-input-wrp #user-password");
    var confirmpass = document.querySelector(".user-input-wrp #confirm-password");
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