import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer();

import {append} from "./plansfetch.js"

import {checkLogin} from "../scripts/sigin.js"
checkLogin();

let PiotPlansData =[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-7428-2-week-stress-reduction-challenge-b957.jpg",
        timing:"2 WEEK PROGRAM - 7 MIN/DAY",
        title:"2-Week Stress Reduction Challenge",
        price:"7.99",
    },

]

function PiotPlans(PiotData){
    let container = document.getElementById("plans-section");
    append(PiotData,container)
}

PiotPlans(PiotPlansData)