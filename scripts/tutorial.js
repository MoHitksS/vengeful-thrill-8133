import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer();

import {checkLogin} from "../scripts/sigin.js"
checkLogin();
let data = [
    {
        heading: "Finding the Right Workout",
        subheading: "Use Filters and Search to quickly find what you're looking for."
    },

    {
        heading: "How to Use Tags",
        subheading: "Organize and quickly find content by tagging your videos."
    },

    {
        heading: "Building Routines",
        subheading: "Create reusable, personalized routines to schedule your workouts with ease."
    },
]

let container = document.getElementById("tutorial-data");
data.forEach((element,index) => {
    let mainbox = document.createElement("div");
    mainbox.setAttribute("class","mainbox")
    let box = document.createElement("div");
    
    let span;
    if(index < data.length-1){
        span = document.createElement("span");
        span.setAttribute("class","material-symbols-outlined")
        span.innerText = "filter_alt"
    }
    else{
        span = document.createElement("span");
        span.setAttribute("class","material-symbols-outlined")
        span.innerText = "settings"
    }

    box.append(span)

    let box1 = document.createElement("div");
    let heading = document.createElement("h4");
    heading.innerText = element.heading;

    let subheading = document.createElement("p");
    subheading.innerText = element.subheading;

    box1.append(heading,subheading);

    mainbox.append(box,box1)

    container.append(mainbox)
});
