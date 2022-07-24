import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();



let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

let append = (data,container) =>{
    data.forEach(element => {
        let card = document.createElement("div");
        card.setAttribute("class", "plans-card")
        
        let imgBox = document.createElement("div");
        let img = document.createElement("img");
        img.src = element.img
        imgBox.append(img);

        let contentDetails = document.createElement("div");
        let programTime = document.createElement("p");
        programTime.innerText = element.timing;

        let programTitle = document.createElement("h3");
        programTitle.innerText = element.title;

        contentDetails.append(programTime,programTitle);

        let productMessage = document.createElement("div");
        productMessage.setAttribute("class","product-message-card")
        let productMsg = document.createElement("p");
        productMsg.innerText = "As Low As"

        let productBag = document.createElement("div");
        let productPrice = document.createElement("p");
        productPrice.innerText = `$${element.price}`;


        let productButton = document.createElement("button");
        let span1 = document.createElement("span");
        span1.setAttribute("class","material-symbols-outlined");
        span1.innerText = "shopping_bag";

        let span2 = document.createElement("span");
        span2.innerText = "ADD TO BAG";

        productButton.append(span1,span2);
        productButton.onclick = () =>{
            ShowData(element);
        }
        productBag.append(productPrice,productButton);
        productMessage.append(productMsg,productBag);

        card.append(imgBox,contentDetails,productMessage)
        container.append(card)

    });
}

function ShowData(element){
    let footer = document.getElementById("footer")
    footer.style.width = "1600px"
    let ShowDetailsContainer = document.querySelector("#showBagDataContainer");
    ShowDetailsContainer.style.position = "fixed" ;
    ShowDetailsContainer.style.display = "block";
    let body = document.querySelector("body");
    body.style.position = "fixed" 

    let ShowDetailsBagData = document.querySelector("#showBagData");
    ShowDetailsBagData.style.visibility = "visible"
    ShowDetailsBagData.innerHTML = null;

    let ShowDetails = document.createElement("div");
    ShowDetails.setAttribute("class", "BagData-item")

    let closebutton = document.createElement("button");
    closebutton.setAttribute("class","closebutton");
    closebutton.onclick = () =>{
        window.location.reload();
    }
    let spanclose = document.createElement("span");
    spanclose.setAttribute("class", "material-symbols-outlined");
    spanclose.innerText = "close";

    closebutton.append(spanclose)
    let img = document.createElement("img");
    img.src = element.img;

    let h2 = document.createElement("h2");

    let span1 = document.createElement("span");
    span1.innerText = "FB"

    let span2 = document.createElement("span");
    span2.innerText = "Plus";

    let span3 = document.createElement("span");
    span3.innerText = "Pass";

    h2.append(span1,span2,span3);

    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    li1.innerText = "15 days of FB Plus Access"

    let li2 = document.createElement("li");
    li2.innerText = "Your selected program"

    let li3 = document.createElement("li");
    li3.innerText = "All other FB Plus programs"

    let li4 = document.createElement("li");
    li4.innerText = "All the additional content and features of FB Plus"

    ul.append(li1,li2,li3,li4)

    let buttonDiv = document.createElement("div");
    let button = document.createElement("button");
    button.innerText = "BUY PASS";
    button.onclick = () =>{
        window.location.href = "cart.html"
    }

    buttonDiv.append(button);

    let productPrice = document.createElement("p");
    productPrice.innerText = `$${element.price}`;

    ShowDetails.append(closebutton,img,h2,ul,buttonDiv,productPrice);
    ShowDetailsBagData.append(ShowDetails)
    cartData.push(element)
    localStorage.setItem("cartData",JSON.stringify(cartData))
}

export {append}