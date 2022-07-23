import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer();

import {checkLogin} from "../scripts/sigin.js"
checkLogin();

let cartData = JSON.parse(localStorage.getItem("cartData"))
let total = 0;

window.onload = showCheckoutdata()
window.onload = paymentGateway()

function showCheckoutdata(){
    let container = document.getElementById("checkout-data-add")
    cartData.forEach((element) => {
        let dataDiv = document.createElement("div");
        dataDiv.setAttribute("class","checkout-data-add")

        let leftDiv = document.createElement("div");
        leftDiv.setAttribute("class","checkout-leftdiv")

        let contentDiv = document.createElement("div");

        let p2 = document.createElement("p");
        p2.innerText = "15-Day Pass";

        contentDiv.append(p2)
        leftDiv.append(contentDiv)

        let rightDiv = document.createElement("div");
        rightDiv.setAttribute("class","checkout-rightDiv")
        let productPrice = document.createElement("p");
        productPrice.innerText = `$${element.price}`;
        total += +(element.price)
        document.getElementById("TotalPrice-checkout").innerText = `$${total.toFixed(2)}` 
        rightDiv.append(productPrice);

        dataDiv.append(leftDiv,rightDiv)
        container.append(dataDiv)
    });
}

function paymentGateway(){
    document.getElementById("placeOrder").onclick =() =>{
        placeOrder();
    }
}

function placeOrder(){
    let cardNumber = document.getElementById("cardNumber").value;
    let expiry = document.getElementById("expirationDate").value;
    let cvv = document.getElementById("cvv").value;

    if(cardNumber == "123456789" && expiry =="12/22" && cvv == "123"){
        window.location.href = "payment.html"
    }else{
        alert("Fill All The Details")
    }
}
