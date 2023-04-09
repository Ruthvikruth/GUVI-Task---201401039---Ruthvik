$(document).ready(function(){
    $("#submit-btn").click(function(){
       let email = $("#user-email").val();
       let password = $("#user-password").val();
       if(email.length == 0)
       {
          alert("Email not provided");
       }
       else if(password.length == 0)
       {
          alert("Enter your password!");
       }
       else
       {
          $.ajax({
            type: "POST",
            url: '../php/login.php',
            data: {Email:email,Password:password},
            success:function(data){
              if(data == 1)
              {
                  alert("Login Success!");
                  localStorage.setItem("userEmail",email);
                  window.open('profile.html','_blank');
              }
              else if(data == 2)
              {
                  alert("Invalid Password!");
              }
              else if(data == 3)
              {
                  alert("Email provided doesn't exist!");
              }
            }
          });
        }
    });
});