import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import {append} from "./healthlivingfetch.js"

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer();

import {checkLogin} from "../scripts/sigin.js"
checkLogin();


let fitnessData=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1195-what-is-rib-flare-and-how-to-tell-if-you-have-it-9bb4.jpg",
        category:"FITNESS",
        title:"What is Rib Flare and How to Tell if You Have It",
        subtitle:"Common causes of rib flare and tips for maintaining rib health",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1126-looking-to-start-a-family-what-you-need-to-know-about-exercise-and-fertility-a2cc.jpg",
        category:"FITNESS",
        title:"Looking to Start a Family? What You Need to Know About Exercise and Fertility",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1125-how-to-do-a-burpee-fitnessblenders-comprehensive-guide-846b.jpg",
        category:"FITNESS",
        title:"How to Do A Burpee: FitnessBlender’s Comprehensive Guide",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1039-new-to-running-heres-what-you-should-know-a558.jpg",
        category:"FITNESS",
        title:"New to Running? Here’s What You Should Know",
        subtitle:"",
    },

]

let healthData=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1130-understanding-the-importance-of-the-pelvic-floor-during-pregnancy-9207.jpg",
        category:"HEALTH",
        title:"Understanding the Importance of the Pelvic Floor During Pregnancy",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1039-new-to-running-heres-what-you-should-know-a558.jpg ",
        category:"HEALTH",
        title:"New to Running? Here’s What You Should Know",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1030-10-exercises-you-can-do-at-work-b9c7.jpg",
        category:"HEALTH",
        title:"10 Exercises You Can Do At Work",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1024-helpful-exercises-for-knee-valgus-ae6d.jpg",
        category:"HEALTH",
        title:"Helpful Exercises for Knee Valgus",
        subtitle:"",
    },
]

let nutritionData=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1134-the-relationship-between-food-and-mood-9c6d.jpg",
        category:"NUTRITION",
        title:"The Relationship Between Food and Mood",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/994-7-health-benefits-to-eating-meals-as-a-family-8390.jpg",
        category:"NUTRITION",
        title:"7 Health Benefits to Eating Meals as a Family",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/944-eating-disorders-explained-contributing-factors-and-lived-experiences-ade2.jpg",
        category:"NUTRITION",
        title:"Eating Disorders Explained, Contributing Factors, and Lived Experiences",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/908-understanding-sugar-addiction-and-ways-to-moderate-sugar-consumption-92d4.jpg",
        category:"NUTRITION",
        title:"Understanding Sugar Addiction and Ways to Moderate Sugar Consumption",
        subtitle:"",
    },
]

let healthrecData=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1222-berry-yogurt-bowl-with-honey-and-almonds-9693.jpg",
        category:"HEALTHY RECIPES",
        title:"Berry Yogurt Bowl with Honey and Almonds",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1180-no-churn-chocolate-and-strawberry-ice-cream-8720.jpg",
        category:"HEALTHY RECIPES",
        title:"No-Churn Chocolate and Strawberry Ice Cream",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1177-high-protein-lentil-stew-with-chicken-acac.jpg",
        category:"HEALTHY RECIPES",
        title:"High-Protein Lentil Stew with Chicken",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1176-vegetarian-lentil-bolognese-with-lentils-8256.jpg",
        category:"HEALTHY RECIPES",
        title:"Vegetarian Lentil Bolognese",
        subtitle:"",
    },
]

let expertData=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1126-looking-to-start-a-family-what-you-need-to-know-about-exercise-and-fertility-a2cc.jpg",
        category:"EXPERTS",
        title:"Looking to Start a Family? What You Need to Know About Exercise and Fertility",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1039-new-to-running-heres-what-you-should-know-a558.jpg",
        category:"EXPERTS",
        title:"New to Running? Here’s What You Should Know",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1030-10-exercises-you-can-do-at-work-b9c7.jpg",
        category:"EXPERTS",
        title:"10 Exercises You Can Do At Work",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1031-6-ways-to-overcome-gym-anxiety-9733.jpg",
        category:"EXPERTS",
        title:"6 Ways to Overcome Gym Anxiety",
        subtitle:"",
    },
]

let mentalhealthData=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1244-exercise-guilt-how-its-helpful-and-how-its-harmful-93d8.jpg",
        category:"MENTAL HEALTH",
        title:"Exercise Guilt: How It's Helpful and How It's Harmful",
        subtitle:"Plus, 6 ways to manage exercise guilt",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1254-6-tips-for-managing-procrastination-8d0c.jpg",
        category:"MENTAL HEALTH",
        title:"6 Tips for Managing Fitness Procrastination",
        subtitle:"Plus, why we procrastinate in the first place",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1241-behavioral-activation-why-exercise-can-improve-depression-b37b.jpg",
        category:"MENTAL HEALTH",
        title:"How Exercise Can Help With Depression",
        subtitle:"Use behavioral activation to boost your mood and exercise more regularly",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1128-5-tips-for-maintaining-body-image-while-facing-ageism-83a5.jpg",
        category:"MENTAL HEALTH",
        title:"5 Tips for Maintaining Body Image While Facing Ageism",
        subtitle:"",
    },
]

let wellnessData=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/wellness-videos/320/320-35-guided-meditation-for-stillness-a9e0.jpg",
        category:"WELLNESS",
        title:"Guided Meditation for Stillness",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/wellness-videos/38-10-minute-guided-meditation-for-open-mindedness-and-flexibility-8323.jpg",
        category:"WELLNESS",
        title:"10-Minute Guided Meditation for Open Mindedness and Flexibility",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/wellness-videos/27-guided-meditation-for-working-through-resentment-8072.jpg",
        category:"WELLNESS",
        title:"Guided Meditation for Working Through Resentment",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/wellness-videos/320/320-42-post-workout-guided-meditation-for-mind-body-connection-9234.jpg",
        category:"WELLNESS",
        title:"10-Minute Post-Workout Guided Meditation for Mind-Body Connection",
        subtitle:"Reduce cortisol levels and activate the parasympathetic nervous system in this mental cool-down",
    },
]
function fitness(fitnessData){
    let cont=document.getElementById("health_fitness");
    append(fitnessData,cont)    
}
fitness(fitnessData)

function health(healthData){
    let cont=document.getElementById("health_health");
    append(healthData,cont)    
}
health(healthData)

function nutrition(nutritionData){
    let cont=document.getElementById("health_nutrition");
    append(nutritionData,cont)    
}
nutrition(nutritionData)

function healthrec(healthrecData){
    let cont=document.getElementById("health_healthrec");
    append(healthrecData,cont)    
}
healthrec(healthrecData)

function expert(expertData){
    let cont=document.getElementById("health_expert");
    append(expertData,cont)    
}
expert(expertData)

function mentalhealth(mentalhealthData){
    let cont=document.getElementById("health_mentalhealth");
    append(mentalhealthData,cont)    
}
mentalhealth(mentalhealthData)

function wellness(wellnessData){
    let cont=document.getElementById("health_wellness");
    append(wellnessData,cont)    
}
wellness(wellnessData)