import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer();

import {append} from "./plansfetch.js"

import {checkLogin} from "../scripts/sigin.js"
checkLogin();

let MealsPlansData =[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-7738-meals-under-30-minutes-meal-plan-for-busy-people-a32a.jpg",
        timing:"1 WEEK PROGRAM - 20 MIN/DAY",
        title:"Meals Under 30 Minutes: Meal Plan for Busy People",
        price:"3.99",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-7128-around-the-world-1-week-omnivore-meal-plan-b211.jpg",
        timing:"1 WEEK PROGRAM - 20 MIN/DAY",
        title:"Around the World 1-Week Omnivore Meal Plan",
        price:"3.99",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_21_fb-meal-plan-eat-real-food-and-feel-great.jpg",
        timing:"4 WEEK PROGRAM",
        title:"FB Meal Plan - Eat Real Food & Feel Great",
        price:"24.99",
    },

]

function MealsPlans(MealsData){
    let container = document.getElementById("plans-section");
    append(MealsData,container)
}

MealsPlans(MealsPlansData)