import { appendright, appendleft } from "./blogfetch.js"
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer();
import {checkLogin} from "../scripts/sigin.js"
checkLogin();


let rightData=[
    {  
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/800/800-1260-three-programs-on-sale-for-30-off-july-2022-sale-ab7e.jpg",
        title:"Three Programs on SALE for 30% Off! - July 2022 Sale",
        date:"May 16, 2022",
        content:"This 1-week meal plan designed for omnivores on the go. With a blend of meal prep and smart leftover usage, the recipes throughout this plan all boast a time commitment of 30 minutes or less."
    },
    {  
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/800/800-1251-introducing-our-new-meal-plan-meals-under-30-minutes-b7ce.jpg",
        title:"Introducing Our NEW Meal Plan: Meals Under 30 Minutes",
        date:"May 16, 2022",
        content:"This 1-week meal plan designed for omnivores on the go. With a blend of meal prep and smart leftover usage, the recipes throughout this plan all boast a time commitment of 30 minutes or less.",
    },
    {  
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/800/800-1245-new-4-week-fb-benchmark-program-and-a-sale-on-fb-plus-8103.jpg",
        title:"New 4-Week FB Benchmark Program and a Sale on FB Plus!",
        date:"May 1, 2022",
        content:"Introducing FB Benchmark, our newest 4-week workout program created by Tasha, designed to help you benchmark your progress on eight common fitness exercises. Plus, a 30% off sale on FB Plus Subscriptions and Passes for new users!",
    },
    {  
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/800/800-1242-three-programs-on-sale-for-30-off-april-2022-sale-8bf9.jpg",
        title:"Three Programs on SALE for 30% Off! - April 2022 Sale",
        date:"April 17, 2022",
        content:"Three of our classic 4-week workout programs are on sale through April 25! Get ready to feel motivated, stay on track, improve your fitness, and feel great.",
    },
    {  
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/800/800-1133-new-4-week-fb-fit-30-program-using-all-exclusive-workout-videos-a307.jpg",
        title:"NEW 4-Week FB Fit 30 Program Using ALL Exclusive Workout Videos!",
        date:"March 6, 2022",
        content:"Our new 4-Week FB Fit 30 Workout Program is a mashup of two of our most popular programs, FB Fit and FB 30. It's built entirely out of exclusive FB Plus videos and allows you to choose between 35- or 45-minute workouts each day.",
    },
    {  
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/800/800-1129-introducing-fb-plus-passes-a-new-way-to-access-fb-plus-bdfe.jpg",
        title:"Introducing FB Plus Passes: A New Way to Access FB Plus!",
        date:"March 1, 2022",
        content:"Announcing a new way to use FB Plus!",
    },
    {  
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/800/800-1094-three-programs-on-sale-for-30-off-b554.jpg",
        title:"Three Programs on SALE for 30% Off!",
        date:"February 7, 2022",
        content:"Three of our most popular 4-week workout programs are ON SALE from February 7–16, 2022 — great options for beginners, advanced exercisers, and everyone in between!",
    },
    {  
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/800/800-1014-4-week-fb-strong-round-2-workout-program-now-available-82fe.jpg",
        title:"4-Week FB Strong Round 2 Workout Program Now Available!",
        date:"January 2, 2022",
        content:"The ultimate program for people who love strength training! Great for building lean muscle, reducing body fat, increasing strength, endurance, and coordination. Available for purchase; included free with active FB Plus account.",
    },
]


let leftData=[
    {  
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_27_fb-abs-round-2-core-program-for-abs-obliques-and-lower-back.jpg",
        category:"PROGRAMS",
        title:"FB Abs - Round 2: Core Program for Abs, Obliques and Lower Back",
        content:"All new workout videos, all new challenges; welcome to 4 Week FB Abs Round 2!"
    },
    {  
        img:"https://d18zdz9g6n5za7.cloudfront.net/wellness-videos/320/320-29-guided-meditation-for-building-and-improving-concentration-9425.jpg",
        category:"WELLNESS",
        title:"Guided Meditation for Improving Focus and Building Concentration",
        content:"Meditation is a great tool for increasing cognitive faculties such as attention, concentration, and even memory. In this 20 minute meditation, you can deepen your practice and begin to build"
    },
    {  
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-844-what-we-can-learn-from-the-mediterranean-diet-with-example-daily-menu-a809.jpg",
        category:"ARTICLES",
        title:"What We Can Learn From the Mediterranean Diet - With Example Daily Menu",
        content:"Take a closer look at the Mediterranean Diet with a Registered Dietitian"
    },
    {  
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_27_fb-abs-round-2-core-program-for-abs-obliques-and-lower-back.jpg",
        category:"PROGRAMS",
        title:"FB Abs - Round 2: Core Program for Abs, Obliques and Lower Back",
        content:"All new workout videos, all new challenges; welcome to 4 Week FB Abs Round 2!"
    },
    {  
        img:"https://d18zdz9g6n5za7.cloudfront.net/wellness-videos/320/320-29-guided-meditation-for-building-and-improving-concentration-9425.jpg",
        category:"WELLNESS",
        title:"Guided Meditation for Improving Focus and Building Concentration",
        content:"Meditation is a great tool for increasing cognitive faculties such as attention, concentration, and even memory. In this 20 minute meditation, you can deepen your practice and begin to build"
    },
    {  
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-844-what-we-can-learn-from-the-mediterranean-diet-with-example-daily-menu-a809.jpg",
        category:"ARTICLES",
        title:"What We Can Learn From the Mediterranean Diet - With Example Daily Menu",
        content:"Take a closer look at the Mediterranean Diet with a Registered Dietitian"
    },
    

]

function rght(rightData){
    let cont=document.getElementById("right")
    appendright(rightData,cont)
}
rght(rightData);

function lft(leftData){
    let cont=document.getElementById("left")
    appendleft(leftData,cont)
}
lft(leftData);