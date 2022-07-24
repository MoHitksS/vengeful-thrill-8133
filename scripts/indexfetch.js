import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let append = (data, container) => {
  console.log(data);
  data.forEach((element) => {
    let mainbox = document.createElement("div");
    let card_head = document.createElement("div")
    card_head.innerText = element.anthem;

    let card = document.createElement("div");
    card.setAttribute("class", "plans-card");

    let imgBox = document.createElement("div");
    let img = document.createElement("img");
    img.src = element.img;
    imgBox.append(img);

    let contentDetails = document.createElement("div");
    let programTime = document.createElement("p");
    programTime.innerText = element.timing;

    let programTitle = document.createElement("h3");
    programTitle.innerText = element.title;
    contentDetails.append(programTime, programTitle);

    let productMessage = document.createElement("div");
    productMessage.setAttribute("class", "product-message-card");

    let productBag = document.createElement("div");
    let productPrice = document.createElement("p");
    productPrice.innerText = `$${element.price}`;
    productBag.append(productPrice);
    
    productMessage.append(productBag);

    card.append(imgBox, contentDetails, productMessage);
    mainbox.append(card_head, card)
    container.append(mainbox);
  });
};
export { append };
