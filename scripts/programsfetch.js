import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import {checkLogin} from "../scripts/sigin.js"
checkLogin();

let append =(data,cont) =>{
    data.forEach(({logo,img,category,title,subtitle}) => {

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
        div.setAttribute("class","programs_cards");
        div.style.backgroundColor="white";



        // let fb=document.createElement("div");
        // fb.innerText="FB Plus";
        // fb.style.position="absolute";
        // fb.style.top="0";
        // fb.style.right="0";
        // fb.style.background="#3cdbb8";
        // fb.style.color="#ffffff";
        // fb.style.fontWeight="bold";
        // fb.style.fontSize="1.2em";
        // fb.style.textShadow="0px 0px 3px rgb(0 0 0 / 20%)";
        // fb.style.padding="0.5rem 1rem";
        // fb.style.borderRadius="0 0 0 6px";
        // fb.style.borderBottom="2px solid #ffffff";
        // fb.style.borderLeft="2px solid #ffffff";
        // fb.style.zIndex="1";
        // fb.style.cursor="pointer";
        // div.style.padding="10px"

        div.append(image,catg,tit,sub)
        cont.append(div)
    });
}

export{append}