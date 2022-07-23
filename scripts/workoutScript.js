import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer();

import {append} from "./workoutFetch.js";

import {checkLogin} from "../scripts/sigin.js"
checkLogin();
let newestFree=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/800/800-1068-upper-body-strength-supersets-with-cardio-interval-burnouts-8001.jpg",
        category:"UPPER BODY - 29 MIN",
        title:"Upper Body Strength Supersets with Cardio Interval Burnouts",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/800/800-1063-quick-bodyweight-hiit-with-active-recovery-intervals-96b6.jpg",
        category:"TOTAL BODY - 26 MIN",
        title:"Quick Bodyweight HIIT with Active Recovery Intervals",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/800/800-1065-gentle-yoga-total-body-restorative-flow-9e15.jpg",
        category:"TOTAL BODY - 30 MIN",
        title:"Gentle Yoga: Total Body Restorative Flow",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/800/800-1059-no-equipment-upper-body-strength-descending-ladder-with-cardio-intervals-8a1c.jpg",
        category:"UPPER BODY CARE - 29 MIN",
        title:"No-Equipment Upper Body Strength Descending Ladder with Cardio Intervals",
        subtitle:"",
    },

]

let newestPlus=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-1032-power-yoga-flow-with-back-bends-9603.jpg",
        category:"UPPER BODY - 47 MIN",
        title:"Power Yoga Flow with Back Bends",
        subtitle:"Poses to Release Shoulder and Chest Tension",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/640/640-1070-lower-body-pure-strength-with-bands-and-weights-a987.jpg",
        category:"LOWER BODY - 32 MIN",
        title:"Knee-Friendly Strength Workout with Bands and Weights",
        subtitle:"Lower Body Pure Strength",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-1077-mobility-routine-for-active-recovery-days-9cd9.jpg",
        category:"TOTAL BODY - 26 MIN",
        title:"Mobility Routine for Active Recovery Days",
        subtitle:"Total Body Restorative Stretching",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-1078-straightforward-strength-circuits-with-power-intervals-8e5c.jpg",
        category:"TOTAL BODY - 73 MIN",
        title:"Straightforward Strength Circuits with Power Intervals",
        subtitle:"Upper and Lower Body Split",
    },

]

let beginner=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-1068-upper-body-strength-supersets-with-cardio-interval-burnouts-8001.jpg",
        category:"UPPER BODY - 29 MIN",
        title:"Upper Body Strength Supersets with Cardio Interval Burnouts",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-1069-remove-one-style-lower-body-interval-training-circuits-9c9f.jpg",
        category:"LOWER BODY - 43 MIN",
        title:"Remove-One Style Lower Body Interval Training Circuits",
        subtitle:"Low Impact Bodyweight Cardio Workout",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-1025-postpartum-core-and-pelvic-floor-recovery-series-level-3-a590.jpg",
        category:"CORE - 22 MIN",
        title:"Postpartum Core and Pelvic Floor Recovery Series - Level 3",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-1061-standing-room-only-bodyweight-workout-for-small-spaces-af61.jpg",
        category:"CORE, TOTAL BODY - 25 MIN",
        title:"“Standing Room Only”: Bodyweight Workout for Small Spaces",
        subtitle:"",
    },

]

let hiitWorkout=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-1068-upper-body-strength-supersets-with-cardio-interval-burnouts-8001.jpg",
        category:"UPPER BODY - 29 MIN",
        title:"Upper Body Strength Supersets with Cardio Interval Burnouts",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-1063-quick-bodyweight-hiit-with-active-recovery-intervals-96b6.jpg",
        category:"TOTAL BODY - 26 MIN",
        title:"Quick Bodyweight HIIT with Active Recovery Intervals",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-1058-kettlebell-swing-boot-camp-guided-kettlebell-swing-tutorial-afb5.jpg",
        category:"CORE, LOWER BODY - 38 MIN",
        title:"Kettlebell Swing Boot Camp + Guided Kettlebell Swing Tutorial",
        subtitle:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-1054-lower-body-ladder-strength-circuits-with-cardio-tabata-intermissions-95c6.jpg",
        category:"LOWER BODY - 47 MIN",
        title:"Lower Body Ladder Strength Circuits with Cardio Tabata Intermissions",
        subtitle:"",
    },

]

let strengthWorkout=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-1070-lower-body-pure-strength-with-bands-and-weights-a987.jpg",
        category:"LOWER BODY - 32 MIN",
        title:"Knee-Friendly Strength Workout with Bands and Weights",
        subtitle:"Lower Body Pure Strength",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-1078-straightforward-strength-circuits-with-power-intervals-8e5c.jpg",
        category:"TOTAL BODY - 73 MIN",
        title:"Straightforward Strength Circuits with Power Intervals",
        subtitle:"Upper and Lower Body Split",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-1057-core-strength-circuits-with-sliding-discs-b32f.jpg",
        category:"CORE - 28 MIN",
        title:"Core Strength Circuits with Sliding Discs",
        subtitle:"Instability Workout for Abdominals, Hip Flexors, and Lower Back Muscles",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/video/320/320-1067-cardio-kickboxing-and-lower-body-strength-combo-b08a.jpg",
        category:"LOWER BODY - 43 MIN",
        title:"Cardio Kickboxing and Lower Body Strength Combo",
        subtitle:"",
    },

]




function newFree(newestFree){
    let cont=document.getElementById("select");
    append(newestFree,cont)    
}
newFree(newestFree);

function newPlus(newestPlus){
    let cont=document.getElementById("select1");
    append(newestPlus,cont)    
}
newPlus(newestPlus);

function beginners(beginner){
    let cont=document.getElementById("select2");
    append(beginner,cont)    
}
beginners(beginner);

function hiitWorkouts(hiitWorkout){
    let cont=document.getElementById("select3");
    append(hiitWorkout,cont)    
}
hiitWorkouts(hiitWorkout);

function strengthWorkouts(strengthWorkout){
    let cont=document.getElementById("select4");
    append(strengthWorkout,cont)    
}
strengthWorkouts(strengthWorkout);
