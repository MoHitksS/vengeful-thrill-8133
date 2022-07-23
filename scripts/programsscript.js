let arr=["Work out with research-backed programs designed by Certified Personal Trainers (CPTs).","Follow expertly-curated combinations of workouts from our free video library.","Take the guesswork out of planning routines and picking workouts.","Focus your exercise time with proper structure for more effective results.","Learn to modify individual exercises to accommodate virtually any fitness level.","Improve overall health and functional fitness.","Schedule and track progress via the FB Calendar.","Review each day's objectives and workout details.","Complete as many times as you like.","Get additional tips and information with a detailed program and nutrition guide."]
let tbody=document.querySelector("tbody");
arr.forEach((element,index)=>{
    let tr=document.createElement("tr");

    let td1=document.createElement("td");
    td1.innerText=element;
    
    let td2=document.createElement("td");
    td2.setAttribute("class","membershipfeatures_cell");

    let span=document.createElement("span");
    span.setAttribute("class","material-symbols-outlined");
    span.innerText="check_circle";

    td2.append(span);
    tr.append(td1,td2);
    tbody.append(tr);
});


import {append} from "./programsfetch.js";


let fullLengthWP=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-7776-4-week-fb-benchmark-program-total-body-strength-and-conditioning-826d.jpg",
        category:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4-Week FB Benchmark Program – Total Body Strength and Conditioning",
        subtitle:"Included with FB Plus!",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-6526-4-week-fbfit-and-fb30-all-exclusive-workout-videos-35-or-45-minutes-a-day-90ff.jpg",
        category:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4 Week FB Fit30 - All Exclusive Workout Videos: 35 or 45 Minutes a Day ",
        subtitle:"Included with FB Plus!",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-6170-4-week-fb-strong-round-2-a786.jpg",
        category:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4 Week FB Strong: Round 2 - Build Muscle, Increase Strength and Feel Great",
        subtitle:"$14.99",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-3614-fb-fit-round-3-intense-4-week-workout-program-a946.jpg",
        category:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"FB Fit - Round 3: Intense 4 Week Workout Program",
        subtitle:"$14.99",
    },

]

function fullLength(fullLengthWP){
    let cont=document.getElementById("second");
    append(fullLengthWP,cont)    
}
fullLength(fullLengthWP);