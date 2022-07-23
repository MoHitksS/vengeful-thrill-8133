import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer();

import {checkLogin} from "../scripts/sigin.js"
checkLogin();

let userData = JSON.parse(localStorage.getItem("users"));
let temp = JSON.parse(localStorage.getItem("temp"));
window.onload = accountNewLoad();
function accountNewLoad(){
    let accountnewFunc = document.querySelector("#createAccount");
    accountnewFunc.onclick = () =>{
        accountNew();
    }
}

let inputData = () =>{
    document.getElementById("FirstName").value = temp.firstname
    document.getElementById("LastName").value = temp.lastname;
    document.getElementById("Email").value = temp.email;
    document.getElementById("Username").value = temp.username;
}

inputData();

let accountNew = () =>{
    event.preventDefault();
    let firstName = document.getElementById("FirstName").value;
    let lastName = document.getElementById("LastName").value;
    let email = document.getElementById("Email").value;
    let username = document.getElementById("Username").value;
    let StartWeekOn = document.getElementById("StartWeekOn").value;
    let WorkoutCompleteEffects = document.getElementById("WorkoutCompleteEffects").value;
    let DisplayCalorieBurnEstimates = document.getElementById("DisplayCalorieBurnEstimates").value;
    
    if(firstName !== "" && lastName !== "" && email !== "" , username !==""){
        let user = new User(firstName,lastName,email,username);
        user.check();
    }else{
        alert("Please fill all details")
    }

}

class User{
    constructor(firstName,lastName,email,username){
        this.name = `${firstName} ${lastName}`;
        this.firstname = firstName;
        this.lastname = lastName;
        this.email = email;
        this.username = username;
    }

    check(){
        if(temp.email === this.email){
           userData.forEach(element => {
                if(element.email === temp.email){
                    element.name = this.name;
                    element.firstname = this.firstname;
                    element.lastname = this.lastname;
                    element.email = this.email;
                    element.username = this.username
                }
            })
            localStorage.setItem("temp", JSON.stringify(this));
            localStorage.setItem("users", JSON.stringify(userData));
            alert("Account created Successfully")
            window.location.href = "../page/login.html";
        }else{
            alert("Please Enter Your Registered Email")
        }
    }

}