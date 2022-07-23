import {append} from "./plansfetch.js"

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