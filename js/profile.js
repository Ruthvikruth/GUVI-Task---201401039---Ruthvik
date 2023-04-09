let username;
let contact;
let gender;
let dob;
let age;
let websiteURL;

$(document).ready(function() {
    $(function(){


            $('#username-val').attr('contenteditable','true');
            $("#usercontact-val").attr('contenteditable','true');
            $("#usergender-val").attr('contenteditable','true');
            $("#userdob-val").attr('contenteditable','true');
            $("#userage-val").attr('contenteditable','true');
            $("#userwebsite-val").attr('contenteditable','true');
            $('#useremail-val').val(localStorage.getItem("userEmail"));

            username = $('#username-val').val();
            email = $('#useremail-val').val();
            contact = $("#usercontact-val").val();
            gender = $("#usergender-val").val();
            dob = $("#userdob-val").val();
            age = $("#userage-val").val();
            websiteURL = $("#userwebsite-val").val();
    });
});


$(document).ready(function(){
    $("#Done").click(function(){
        $.ajax({
            type: "POST",
            url:    "../php/profile.php",
            data: { Name: username, Email: email, Gender: gender, Contact: contact, DOB: dob, Age: age, Website:websiteURL},
            success:function(response){
                if(response == 1)
                {
                    alert("Data Updated Successfully!");
                }
                else if(response == 2)
                {
                    alert("Email already exists!");
                }
            }
            })
    });
});
