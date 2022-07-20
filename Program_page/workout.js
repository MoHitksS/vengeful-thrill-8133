import {append} from "./fetch.js";


let data=[
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

function workout(data){
    let cont=document.getElementById("second");
    append(data,cont)    
}
workout(data)