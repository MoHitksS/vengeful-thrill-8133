import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer();

import {checkLogin} from "../scripts/sigin.js"
checkLogin();

let flag = JSON.parse(localStorage.getItem("flag")) || false;
let cartData = JSON.parse(localStorage.getItem("cartData"))
let total = 0;
window.onload = showBagdata()

function showBagdata(){
    let container = document.getElementById("cart-data-add")
    cartData.forEach((element,index) => {
        let dataDiv = document.createElement("div");
        dataDiv.setAttribute("class","cart-data-add")
        let leftDiv = document.createElement("div");
        leftDiv.setAttribute("class","cart-leftdiv")

        let imageDiv = document.createElement("div");
        imageDiv.setAttribute("class","cart-imagediv")
        let image = document.createElement("img");
        image.src = element.img
        imageDiv.append(image)

        let contentDiv = document.createElement("div");
        let p1 = document.createElement("p");
        p1.innerText = "FB PLUS PASS"

        let p2 = document.createElement("p");
        p2.innerText = "15-Day Pass";

        contentDiv.append(p1,p2)
        leftDiv.append(imageDiv,contentDiv)

        let centerDiv = document.createElement("div");
        centerDiv.setAttribute("class", "cart-centerDiv")
        let span = document.createElement("span");
        span.setAttribute("class", "material-symbols-outlined");
        span.innerText = "close";
        span.onclick = () =>{
            RemoveDataCart(element,index)
        }
        centerDiv.append(span);

        let rightDiv = document.createElement("div");
        rightDiv.setAttribute("class","cart-rightDiv")
        let productPrice = document.createElement("p");
        productPrice.innerText = `$${element.price}`;
        total += +(element.price)
        document.getElementById("TotalPrice-cart").innerText = `$${total.toFixed(2)}` 
        rightDiv.append(productPrice);

        dataDiv.append(leftDiv,centerDiv,rightDiv)
        container.append(dataDiv)
    });
}

function RemoveDataCart(element,index){
    cartData.splice(index,1);
    localStorage.setItem("cartData",JSON.stringify(cartData));
    window.location.reload()
}

document.getElementById("Checkout").onclick = () =>{
    event.preventDefault()
    if(flag == true){
        window.location.href = "../page/checkout.html"
    }else{
        alert("Please Login First")
        window.location.href = "../page/login.html"
    }
}