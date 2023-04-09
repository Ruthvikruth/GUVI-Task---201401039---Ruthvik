$(document).ready(function(){
    $("#submit-btn").click(function(){
       let email = $("#user-email").val();
       let password = $("#user-password").val();
       let name = $("#user-name").val();
       let contact = $("#user-contact").val();
       let password_again = $("#user-password-again").val();
       let gender = $("input[type='radio']:checked").val();

       if(gender == 1)
          gender = "Male";
       if(gender == 2)
          gender = "Female";
       if(gender == 3)
          gender = "Others";

       if(email.length == 0)
       {
          alert("Length 0 for email");
       }
       else if(password.length == 0)
       {
          alert("Length 0 for password");
       }
       else if(name.length == 0)
       {
          alert("Username is not given");
       }
       else if(contact.length == 0)
       {
          alert("Invalid mobile number or mobile number is not provided");
       }
       else if(password_again.length == 0 || password_again != password)
       {
          alert("Re-enter your password");
       }
       else
       {
            $.ajax({
            type: "POST",
            url: "../php/register.php",
            data: {Name: name,Email:email,Gender:gender,Contact:contact,Password:password},
            success:function(response){
               if(response == 1)
               {
                  alert("Data Added Successfully!");
               }
               else if(response == 2)
               {
                  alert("Email already exists!");
               }
            }
           });
      }
    });
 });