import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer();
let flag = JSON.parse(localStorage.getItem("flag")) || false;
let user = JSON.parse(localStorage.getItem("users")) || [];
if(flag == true){
    window.location.href = "../index.html"
}
window.onload = signupLoad();
function signupLoad(){
    let signupFunc = document.querySelector("#signup-buttons");
    signupFunc.onclick = () =>{
        signUp();
    }
}

let signUp = () =>{
    event.preventDefault();
    let firstName = document.getElementById("signupFirstName").value;
    let lastName = document.getElementById("signupLastName").value;
    let email = document.getElementById("signupEmail").value;
    let username = document.getElementById("signupUsername").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("signupConfirmPassword").value;
    let recaptcha = document.getElementById("signupRecaptcha").checked;
    let tandc = document.getElementById("signuptandc").checked;

    if(firstName !== "" && lastName !=="" && email !== "" && username !=="" && password !== "" && confirmPassword !=="" && recaptcha !== false && confirmPassword !== false && tandc !== ""){
        if(password == confirmPassword){
            let UserData = new User(firstName,lastName)
            UserData.signUp(email,username,password);

        }else{
            alert("Please Enter Same Password is Not Matching");
        }

    }else{
        alert("Fill All The Details");
    }

}

class User{
    constructor(firstName,lastName){
        this.name = `${firstName} ${lastName}`;
        this.firstname = firstName;
        this.lastname = lastName;
    }

    signUp(email,username,password) {
        let validation = false;
        validation = this.ValidateEmail(email);
        if (validation) {
            this.email = email;
            this.password = password;
            this.username = username;
            user.push(this);
            alert("Signup Successfull")
            localStorage.setItem("temp", JSON.stringify(this));
            localStorage.setItem("users", JSON.stringify(user));
            window.location.href = "accountnew.html";
        } else {
            alert("User Already Exist");
        }
    }


    ValidateEmail(email) {
        if (user.length == 0) {
            return true
        }
        else {
            let check = false;
            user.forEach(function (element) {
                if (element.email === email) {
                    check = false;
                }
                else {
                    check = true;
                }
            });
            return check;
        }
    }
}