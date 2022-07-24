let cartData = JSON.parse(localStorage.getItem("cartData"))
window.onload = payment();
function payment(){
    alert("Your OTP IS 123456");
    document.getElementById("checkOTP").onclick = () =>{
        checkOtp();
    }
}
let container = document.getElementById("paymentContainer")
let maincontainer = document.getElementById("maincontainer")
function checkOtp(){
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let third = document.getElementById("third").value;
    let fourth = document.getElementById("fourth").value;
    let fifth = document.getElementById("fifth").value;
    let sixth = document.getElementById("sixth").value;

    if(first == 1 && second == 2 && third == 3 && fourth == 4 && fifth == 5 && sixth == 6 ){
        maincontainer.innerHTML = null;
        container.style.visibility = "visible"
    }else{
        maincontainer.innerHTML = null;
        container.style.visibility = "visible"
        document.querySelector(".check>i").setAttribute("class","fa fa-close");
        document.querySelector(".content>h1").innerText = "Payment Failed";
        document.querySelector(".content>h1+p").innerText = "Please Try Again";
        document.querySelector(".payment_header").style.backgroundColor = "red"
        document.querySelector(".content a").style.backgroundColor = "red"
    }
}