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

let arrQ=["Work out with research-backed challenges designed by Certified Personal Trainers (CPTs).",
"Follow expertly-curated combinations of workouts from our free video library.",
"Take the guesswork out of planning routines and picking workouts.",	
"Focus your exercise time with proper structure for more effective results.",
"Learn to modify individual exercises to accommodate virtually any fitness level.",
"Improve overall health and functional fitness.",
"Schedule and track progress via the FB Calendar.",
"Complete as many times as you like."]
let tbodyQ=document.getElementById("qtbody");
arrQ.forEach((element,index)=>{
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
    tbodyQ.append(tr);
});


let arrM=["Follow healthy, research-backed meal plans designed by Registered Dietitians (RDs) and crafted by professional chefs.",
"Make meal planning for the week a breeze with easy-to-follow recipes and shopping lists.",
"Schedule and track your meals on the FB Calendar.",
"Personalize your meal plans to fit your approach to food and daily energy needs.",
"Build or maintain your healthy eating habits.",
"Complete as many times as you like.",
"Mix and match with other meal plans to keep your diet fresh and exciting.",
"US Customary and Metric units included with all plans and recipes."]
let tbodyM=document.getElementById("tbodyM");
arrM.forEach((element,index)=>{
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
    tbodyM.append(tr);
});


let arrP=["New pilot programs to test different types of content, formats, or topics.",
"Researched backed and designed by experts.",
"May include guided meditations, mental wellness, and other specialized topics.",
"Works alongside existing scheduled workout programs and meal plans."	]
let tbodyP=document.getElementById("tbodyP");
arrP.forEach((element,index)=>{
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
    tbodyP.append(tr);
});




import {append} from "./programsfetch.js";


let fullLengthWP=[
    {
        // logo:"FB Plus",
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-7776-4-week-fb-benchmark-program-total-body-strength-and-conditioning-826d.jpg",
        category:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4-Week FB Benchmark Program – Total Body Strength and Conditioning",
        subtitle:"Included with FB Plus!",
    },
    {
        // logo:"FB Plus",
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-6526-4-week-fbfit-and-fb30-all-exclusive-workout-videos-35-or-45-minutes-a-day-90ff.jpg",
        category:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4 Week FB Fit30 - All Exclusive Workout Videos: 35 or 45 Minutes a Day ",
        subtitle:"Included with FB Plus!",
    },
    {
        // logo:"FB Plus",
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

let quickWC=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-8622-fb-strong-runner-2-week-strength-focused-challenge-for-improving-running-performance-9544.jpg",
        category:"2 WEEK PROGRAM - 37 MIN/DAY",
        title:"FB Strong Runner: 2-Week Strength-Focused Challenge for Improving Running Performance",
        subtitle:"Included with FB Plus!",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-8081-fb-kettlebell-blend-2-week-kettlebell-challenge-for-functional-strength-a591.jpg",
        category:"2 WEEK PROGRAM - 37 MIN/DAY",
        title:"FB Kettlebell Blend: 2-Week Kettlebell Challenge for Functional Strength",
        subtitle:"Included with FB Plus!",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-7590-2-week-fb-reboot-challenge-a-balanced-approachable-return-to-fitness-bb7b.jpg",
        category:"2 WEEK PROGRAM - 37 MIN/DAY",
        title:"2-Week FB Reboot Challenge - A Balanced, Approachable Return to Fitness",
        subtitle:"Included with FB Plus!",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-6547-2-week-fb-mobility-85b1.jpg",
        category:"2 WEEK PROGRAM - 37 MIN/DAY",
        title:"FB Fit - Round 3: Intense 4 Week Workout Program",
        subtitle:"Included with FB Plus!",
    },

]

let mp=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-7738-meals-under-30-minutes-meal-plan-for-busy-people-a32a.jpg",
        category:"1 WEEK PROGRAM - 20 MIN/DAY",
        title:"Meals Under 30 Minutes: Meal Plan for Busy People",
        subtitle:"Included with FB Plus!",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-7128-around-the-world-1-week-omnivore-meal-plan-b211.jpg",
        category:"1 WEEK PROGRAM - 20 MIN/DAY",
        title:"Around the World 1-Week Omnivore Meal Plan",
        subtitle:"Included with FB Plus!",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_21_fb-meal-plan-eat-real-food-and-feel-great.jpg",
        category:"4 WEEK PROGRAM",
        title:"FB Meal Plan - Eat Real Food & Feel Great",
        subtitle:"$24.99",
    },

]

let pilotprograms=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-7428-2-week-stress-reduction-challenge-b957.jpg",
        category:"2 WEEK PROGRAM - 7 MIN/DAY",
        title:"2-Week Stress Reduction Challenge",
        subtitle:"Included with FB Plus!",
    },

]

function fullLength(fullLengthWP){
    let cont=document.getElementById("second");
    append(fullLengthWP,cont)    
}
fullLength(fullLengthWP);

function quick(quickWC){
    let cont=document.getElementById("third");
    append(quickWC,cont)    
}
quick(quickWC);

function meals(mp){
    let cont=document.getElementById("four");
    append(mp,cont)    
}
meals(mp);

function pp(pilotprograms){
    let cont=document.getElementById("five");
    append(pilotprograms,cont)    
}
pp(pilotprograms);
