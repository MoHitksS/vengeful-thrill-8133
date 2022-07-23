import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import { append } from "./expetarticlesfetch.js"

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer();

import {checkLogin} from "../scripts/sigin.js"
checkLogin();

let expartData=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/640/640-1252-how-often-should-you-meditate-8e59.jpg",
        category:"MENTAL HEALTH - 9 MIN ",
        title:"How Often Should You Meditate?",
        content:"How Frequently to Meditate to Reap Health Benefits",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1244-exercise-guilt-how-its-helpful-and-how-its-harmful-93d8.jpg",
        category:"MENTAL HEALTH - 13 MIN ",
        title:"Exercise Guilt: How It's Helpful and How It's Harmful",
        content:"Plus, 6 ways to manage exercise guilt",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1254-6-tips-for-managing-procrastination-8d0c.jpg",
        category:"MENTAL HEALTH - 15 MIN ",
        title:"6 Tips for Managing Fitness Procrastination",
        content:"Plus, why we procrastinate in the first place",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1241-behavioral-activation-why-exercise-can-improve-depression-b37b.jpg",
        category:"MENTAL HEALTH - 9 MIN ",
        title:"How Exercise Can Help With Depression",
        content:"Use behavioral activation to boost your mood and exercise more regularly",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1128-5-tips-for-maintaining-body-image-while-facing-ageism-83a5.jpg",
        category:"MENTAL HEALTH - 6 MIN ",
        title:"5 Tips for Maintaining Body Image While Facing Ageism",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1195-what-is-rib-flare-and-how-to-tell-if-you-have-it-9bb4.jpg",
        category:"FITNESS - 7 MIN ",
        title:"What is Rib Flare and How to Tell if You Have It",
        content:"Common causes of rib flare and tips for maintaining rib health",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1253-how-to-listen-to-your-body-while-exercising-eating-and-in-times-of-stress-a3e1.jpg",
        category:"MENTAL HEALTH - 12 MIN ",
        title:"How to Listen to Your Body While Exercising, Eating, and in Times of Stress",
        content:"Improve your relationship with exercise, food, stress, and more with these tips",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1215-mindful-movement-how-its-done-and-why-its-good-for-you-8eba.jpg",
        category:"MENTAL HEALTH - 10 MIN ",
        title:"Mindful Movement: How It's Done and Why It's Good for You",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1196-5-ways-to-promote-resilience-through-exercise-b0d7.jpg",
        category:"MENTAL HEALTH - 10 MIN ",
        title:"5 Ways to Promote Resilience Through Exercise",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1124-how-to-combat-mental-health-stigma-a1b8.jpg",
        category:"MENTAL HEALTH - 12 MIN ",
        title:"How to Combat Mental Health Stigma",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1127-ageism-and-body-image-throughout-the-lifespan-81aa.jpg",
        category:"MENTAL HEALTH - 10 MIN ",
        title:"How Ageism Impacts Body Image as We Age",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1136-7-common-misconceptions-about-self-care-8b8d.jpg",
        category:"MENTAL HEALTH - 6 MIN ",
        title:"7 Common Misconceptions About Self-Care",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1243-body-positivity-and-body-neutrality-which-approach-works-best-for-you-b9af.jpg",
        category:"MENTAL HEALTH - 9 MIN ",
        title:"Body Positivity and Body Neutrality: Which Approach Works Best for You?",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1137-how-to-create-a-personalized-self-care-plan-81a0.jpg",
        category:"MENTAL HEALTH - 7 MIN ",
        title:"Create a Personalized Self-Care Plan in 4 Steps",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1092-key-strategies-for-increasing-resilience-in-tough-times-bdf1.jpg",
        category:"MENTAL HEALTH - 8 MIN ",
        title:"Key Strategies for Increasing Resilience in Tough Times",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1099-5-tips-for-improving-self-efficacy-900f.jpg",
        category:"MENTAL HEALTH - 11 MIN ",
        title:"5 Tips for Improving Self-Efficacy ",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1167-why-group-socializing-is-great-for-your-health-8f4d.jpg",
        category:"MENTAL HEALTH - 6 MIN ",
        title:"Why Group Socializing is Great For Your Health",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1135-6-essential-ways-to-practice-self-care-for-wellness-ae9e.jpg",
        category:"MENTAL HEALTH - 6 MIN ",
        title:"6 Essential Ways to Practice Self-Care for Wellness",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1101-5-tips-for-meeting-new-people-and-making-new-friends-b0c3.jpg",
        category:"MENTAL HEALTH - 7 MIN ",
        title:"5 Tips for Meeting New People and Making New Friends",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1051-recognizing-the-healthy-and-unhealthy-coping-mechanisms-in-your-life-97a8.jpg",
        category:"MENTAL HEALTH - 5 MIN ",
        title:"Recognizing the Healthy and Unhealthy Coping Mechanisms In Your Life",
        content:"",
    },

]

function exp(expartData){
    let cont=document.getElementById("expart")
    append(expartData,cont)
}
exp(expartData)