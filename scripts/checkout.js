let cartData = JSON.parse(localStorage.getItem("cartData"))
let total = 0;

window.onload = showCheckoutdata()

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
        document.getElementById("TotalPrice-checkout").innerText = `$${total}` 
        rightDiv.append(productPrice);

        dataDiv.append(leftDiv,rightDiv)
        container.append(dataDiv)
    });
}
