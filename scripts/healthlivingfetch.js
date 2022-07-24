import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import {checkLogin} from "../scripts/sigin.js"
checkLogin();

let append =(data,cont) =>{
    data.forEach(({img,category,title,subtitle}) => {
        let image=document.createElement("img")
        image.src=img;

        let catg=document.createElement("p")
        catg.innerText=category;

        let tit=document.createElement("h3")
        tit.innerText=title;

        let sub=document.createElement("p")
        sub.innerText=subtitle

        let div=document.createElement("div");
        div.setAttribute("class","hoverEffect")
        div.append(image,catg,tit,sub)
        cont.append(div)
    });
}

export {append}