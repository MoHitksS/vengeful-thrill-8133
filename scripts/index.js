import footer from "../components/footer.js";
import navbar from "../components/navbar.js";
import {append} from "./indexfetch.js";
document.querySelector("#footer").innerHTML=footer();
document.querySelector("#navbar").innerHTML=navbar();

import {checkLogin} from "../scripts/sigin.js"
checkLogin();
let flag = JSON.parse(localStorage.getItem("flag")) || false;
let temp = JSON.parse(localStorage.getItem("temp")) || [];

let WorkoutPlansData =[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_31_fb-low-impact-round-2-fat-loss-program-40-minutes-or-less.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4-Week FB Benchmark Program – Total Body Strength and Conditioning",
        price:"7.59",
        anthem:"Perfect for Beginners"
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_29_4-week-fb-blend-burn-fat-build-muscle-tone-35-or-55-minutes-a-day.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4 Week FB Fit30 - All Exclusive Workout Videos: 35 or 45 Minutes a Day ",
        price:"7.59",
        anthem:"You Choose"
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_28_fb-30-4-week-fat-loss-program-for-busy-people-round-4.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4 Week FB Strong: Round 2 - Build Muscle, Increase Strength and Feel Great",
        price:"14.99",
        anthem:"Short on Time?"
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_7_fb-bodyweight-bodyweight-only-fat-loss-program.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"FB Fit - Round 3: Intense 4 Week Workout Program",
        price:"14.99",
        anthem:"No Equipment Necessary"
    }
    
];

function workoutPlans(workoutData){
    let container = document.getElementById("plans-section");
    append(workoutData,container)
}
workoutPlans(WorkoutPlansData);

if(flag == true){
    document.querySelector("#join_left>h2").innerText = temp[0].username;
    document.querySelector("#join_left>h2+p").innerText = "Your free membership gives you access to hundreds of videos, articles, and recipes as well as a positive and supportive community to help you reach and maintain your fitness and wellness goals."
    document.querySelector("#join_now").remove()
}


