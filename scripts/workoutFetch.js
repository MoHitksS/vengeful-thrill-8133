import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
let append =(data,cont) =>{
    data.forEach(({img,category,title,subtitle}) => {
        let image=document.createElement("img")
        image.src=img;
        image.style.height="50%";
        image.style.width="100%";

        let catg=document.createElement("p")
        catg.innerText=category;
        catg.style.color="#4296cb";
        catg.style.fontWeight="100";
        catg.style.fontSize="0.6rem";
        catg.style.paddingTop="7px";
        catg.style.paddingLeft="10px";

        let tit=document.createElement("h3")
        tit.innerText=title;
        tit.style.fontWeight="200";
        tit.style.fontSize="1rem";
        tit.style.paddingLeft="10px";

        let sub=document.createElement("p")
        sub.innerText=subtitle
        sub.style.fontWeight="200";
        sub.style.fontSize="0.6rem";
        sub.style.paddingLeft="10px";

        let div=document.createElement("div");
        div.setAttribute("class","workout_cards");
        div.style.backgroundColor="white";
        div.style.minHeight="360px"

        div.append(image,catg,tit,sub)
        cont.append(div)
    });
}

export{append}