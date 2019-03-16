$(document).ready(function(){
    createPersonForm();
    $('#myForm').change(function(){
        selected_value = $("input[name='userType']:checked").val();
        if (selected_value == 1) {
            console.log(selected_value);
            createPersonForm();
        }
        if (selected_value == 2) {
            console.log(selected_value);
            createBusinessForm();
        }
    });
});

var firstname, lastname, businessname, email, businessType, gender, userAgree;
//Använde program för att göra kod till en rad så de funkar
function createPersonForm(){
    document.getElementById("formContainer").innerHTML = "";
    document.getElementById("formContainer").innerHTML = '<input type="text" placeholder="Namn" name="firstname" id="firstname" autofocus required/><input type="text" placeholder="Efternamn" name="lastname" id="lastname" required /><br /> <input type="text" placeholder="Email" name="email" id="email" required /><br /><input type="password" placeholder="Lösenord" id="password" required><br> <input type="radio" name="gender" class="gender" value="male" required />Man <input type="radio" name="gender" class="gender" value="female" required />Kvinna <input type="radio" name="gender" class="gender" value="other" required />Annat<br /><br /> <input type="checkbox" id="userAgree" required />Jag godkänner användarvillkoren<br /><input type="submit" id="submitButton" value="Registrera konto">';
}

function createBusinessForm() {
    document.getElementById("formContainer").innerHTML = "";
    document.getElementById("formContainer").innerHTML = '<input type="text" placeholder="Företagsnamn" name="businessname" id="businessname" required /> <input type="text" placeholder="Email" name="email" id="email" required /><br /> <input type="radio" name="businessType" class="businessType" value="AB" required />Aktiebolag <input type="radio" name="businessType" class="businessType" value="EF" required />Enskild firma<br /><input type="password" placeholder="Lösenord" id="password" required><br><br /> <input type="checkbox" id="userAgree"required />Jag godkänner användarvillkoren<br /> <input type="submit" id="submitButton" value="Registrera konto"/>'
}


function submitFunction() {

    var form = document.getElementById("formContainer");
    if (form.checkValidity()){
        alert(selected_value)
    }
    firstname = document.getElementsByName("firstname")[0].value;
    lastname = document.getElementsByName("lastname")[0].value;
    businessname = document.getElementsByName("businessname")[0].value;
    email = document.getElementsByName("email")[0].value;
    businessType = document.getElementsByName("businessType")[0].value;
    gender = document.getElementsByName("gender")[0].value;
    userAgree = document.getElementsByName("userAgree")[0].value;
}
function validateForm() {
}