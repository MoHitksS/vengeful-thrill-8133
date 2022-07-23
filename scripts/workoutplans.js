import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer();

import {append} from "./plansfetch.js"

import {checkLogin} from "../scripts/sigin.js"
checkLogin();

let WorkoutPlansData =[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-7776-4-week-fb-benchmark-program-total-body-strength-and-conditioning-826d.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4-Week FB Benchmark Program – Total Body Strength and Conditioning",
        price:"7.59",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-6526-4-week-fbfit-and-fb30-all-exclusive-workout-videos-35-or-45-minutes-a-day-90ff.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4 Week FB Fit30 - All Exclusive Workout Videos: 35 or 45 Minutes a Day ",
        price:"7.59",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-6170-4-week-fb-strong-round-2-a786.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4 Week FB Strong: Round 2 - Build Muscle, Increase Strength and Feel Great",
        price:"14.99",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-3614-fb-fit-round-3-intense-4-week-workout-program-a946.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"FB Fit - Round 3: Intense 4 Week Workout Program",
        price:"14.99",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-7776-4-week-fb-benchmark-program-total-body-strength-and-conditioning-826d.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4-Week FB Benchmark Program – Total Body Strength and Conditioning",
        price:"7.59",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-6526-4-week-fbfit-and-fb30-all-exclusive-workout-videos-35-or-45-minutes-a-day-90ff.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4 Week FB Fit30 - All Exclusive Workout Videos: 35 or 45 Minutes a Day ",
        price:"7.59",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-6170-4-week-fb-strong-round-2-a786.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4 Week FB Strong: Round 2 - Build Muscle, Increase Strength and Feel Great",
        price:"14.99",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-3614-fb-fit-round-3-intense-4-week-workout-program-a946.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"FB Fit - Round 3: Intense 4 Week Workout Program",
        price:"14.99",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-7776-4-week-fb-benchmark-program-total-body-strength-and-conditioning-826d.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4-Week FB Benchmark Program – Total Body Strength and Conditioning",
        price:"7.59",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-6526-4-week-fbfit-and-fb30-all-exclusive-workout-videos-35-or-45-minutes-a-day-90ff.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4 Week FB Fit30 - All Exclusive Workout Videos: 35 or 45 Minutes a Day ",
        price:"7.59",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-6170-4-week-fb-strong-round-2-a786.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4 Week FB Strong: Round 2 - Build Muscle, Increase Strength and Feel Great",
        price:"14.99",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-3614-fb-fit-round-3-intense-4-week-workout-program-a946.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"FB Fit - Round 3: Intense 4 Week Workout Program",
        price:"14.99",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-7776-4-week-fb-benchmark-program-total-body-strength-and-conditioning-826d.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4-Week FB Benchmark Program – Total Body Strength and Conditioning",
        price:"7.59",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-6526-4-week-fbfit-and-fb30-all-exclusive-workout-videos-35-or-45-minutes-a-day-90ff.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4 Week FB Fit30 - All Exclusive Workout Videos: 35 or 45 Minutes a Day ",
        price:"7.59",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-6170-4-week-fb-strong-round-2-a786.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4 Week FB Strong: Round 2 - Build Muscle, Increase Strength and Feel Great",
        price:"14.99",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-3614-fb-fit-round-3-intense-4-week-workout-program-a946.jpg",
        timing:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"FB Fit - Round 3: Intense 4 Week Workout Program",
        price:"14.99",
    },

]

function workoutPlans(workoutData){
    let container = document.getElementById("plans-section");
    append(workoutData,container)
}

workoutPlans(WorkoutPlansData)