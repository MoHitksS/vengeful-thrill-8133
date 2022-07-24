import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import {checkLogin} from "../scripts/sigin.js"
checkLogin();

let append= (data,cont) =>{
    data.forEach(({img,category,title,content}) => {

        let image=document.createElement("img");
        image.src=img;

        let cate=document.createElement("p");
        cate.innerText=category;

        let tit=document.createElement("h5");
        tit.innerText=title;

        let conte=document.createElement("p");
        conte.innerText=content;

        let div=document.createElement("div")

        div.append(image,cate,tit,conte)
        cont.append(div)

        
    });
}

export {append}