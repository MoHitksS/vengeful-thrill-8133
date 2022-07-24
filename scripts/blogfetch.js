import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import {checkLogin} from "../scripts/sigin.js"
checkLogin();
let appendright =(data,cont) =>{
    data.forEach(({img,title,date,content}) => {

        let image=document.createElement("img");
        image.src=img;

        let tit=document.createElement("h1");
        tit.innerText=title;

        let dat=document.createElement("p");
        dat.innerText=date;

        let conte=document.createElement("p");
        conte.innerText=content;

        let div=document.createElement("div")
        div.setAttribute("class","blog-right")

        div.append(image,tit,dat,conte)
        cont.append(div)

        
    });
}

let appendleft=(data,cont) => {
    data.forEach(({img,category,title,content}) => {
 
         let image=document.createElement("img");
         image.src=img;

         let catg=document.createElement("p");
         catg.innerText=category;
 
         let tit=document.createElement("h5");
         tit.innerText=title;
 
         let conte=document.createElement("p");
         conte.innerText=content;
 
         let div=document.createElement("div")
         div.setAttribute("class","blog-left")
 
         div.append(image,catg,tit,conte)
         cont.append(div)
 
         
     });
}

export {appendright, appendleft}