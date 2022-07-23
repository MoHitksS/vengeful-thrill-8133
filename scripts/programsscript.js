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
        overview1:"Welcome to FB Benchmark! During this four-week program, you will utilize a mix of strength training, cardio, and core routines to improve your performance across eight popular exercises included in many Fitness Blender workouts. Each workout in this program contains one or more of these benchmark exercises (or elements thereof) and is sequenced in such a way to promote muscle adaptation and progressive strength gains for improvements in form, movement execution, and range of motion. You will complete a Benchmark Workout with these eight exercises at both the beginning and end of the program to measure your progress, but you determine the extent of your tracking and measuring along the way. Although the program has a heavy emphasis on strength training, there are also sprinkles of HIIT, mobility and balance work, Pilates, yoga, barre, and active recovery workouts. Most training days have more than one workout option — either option you choose will help you achieve progress! This program was designed to demonstrate that there are many different paths to a goal.",
        overview2:"Approach and Mentality: Approach this program with an “any progress is progress” mentality! The difference between completing five push-ups on your knees and five on your toes might not seem that big of a deal at first glance, but consider all the work that must occur to transition between these two alternatives. Lastly, don’t forget to make note of your mental progress. Improvements in confidence and enjoyment of movement are huge wins! ",
        overview3:"Time Commitment, Intensity Level, and Equipment: Workouts average 32 minutes per day with a range of intensity levels, mostly level 3 and level 4 workouts. There are five scheduled workout days per week, one optional workout day, and one rest day. Feel free to swap out workouts, postpone workouts, and take your time with this program. The allotted time for this program is four weeks, but this timeframe is not a requirement. A set of medium and heavy dumbbells are recommended for this program, but can be substituted with other strength equipment where appropriate and safe. Additionally, there are workouts with optional equipment, such as a physio-ball, foam roller, or band, but none of this equipment is required for you to successfully complete the program.",
    },
    {
        // logo:"FB Plus",
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-6526-4-week-fbfit-and-fb30-all-exclusive-workout-videos-35-or-45-minutes-a-day-90ff.jpg",
        category:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4 Week FB Fit30 - All Exclusive Workout Videos: 35 or 45 Minutes a Day ",
        subtitle:"Included with FB Plus!",
        overview1:"Welcome to Fitness Blender's first ever workout program that uses ALL exclusive workout videos! This program follows the theme of both FBFit and FB30; each day you'll get to choose between a 35 or 45 minute workout (two programs in one!).FB Fit30 is great for people who prefer a mix of short and long workouts in their programming. It allows you to choose what works best for your energy needs & schedule. You'll be doing a unique, exclusive workout video every single day; warm up, workout and cool down included - everything you need for a smart workout.The main training types are strength training and HIIT, but this program also includes functional training, plyometrics, Pilates, both isolation and total body work, fundamentals, balance and coordination, stretching, yoga, and recovery cardio. Your trainers are a team of Certified Personal Trainers and Doctors of Physical Therapy; Kelli, Daniel, Tasha, Kayla, Amanda, Nicole and Marina. This program was built and written by Kelli.",
        overview2:"Equipment: You can technically do any of these workouts with only body weight, but dumbbells are very helpful for increasing challenge and strength. Resistance bands and an exercise step (or stair) may also make appearances in this program (in these cases, alternate workouts that use only dumbbells are also provided).",
        overview3:"Program Guide: FB Fit30 includes a daily guide that walks you through every step of the way, and also includes featured content from Doctors of Physical Therapy, Certified Personal Trainers, Doctoral-level Mental Health Professionals, and Registered Dietitians (Meet the Fitness Blender Team). ",
    },
    {
        // logo:"FB Plus",
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-6170-4-week-fb-strong-round-2-a786.jpg",
        category:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"4 Week FB Strong: Round 2 - Build Muscle, Increase Strength and Feel Great",
        subtitle:"$14.99",
        overview1:"Welcome to FB Strong Round 2! If you love strength training and the way it makes you feel, you're going to love FB Strong. These workouts are great for building lean muscle, reducing body fat, increasing strength, endurance, and coordination. This carefully-crafted program helps you get the most out of your training, without stressing or overworking your body. You'll be doing a different workout video each day. This program is available for purchase or free with a Plus membership. ",
        overview2:"FB Strong approach and difficulty level: This workout program is 90% strength training, with complimentary short bursts of muscle building HIIT and Pilates weaved throughout. We use a wide range of dynamic strength training styles, including but not limited to supersets, circuits, both isolation and total body work, intervals, ballistic training, and functional strength. While this program is intense from day one, modifications are shown all throughout and we highly encourage you to listen to your body and make modifications wherever necessary. ",
        overview3:"FB Strong guide & content: FB Strong includes a short daily guide that walks you through every step of the way, also including featured content from Doctors of Physical Therapy, Certified Personal Trainers, Doctoral-level Mental Health Professionals, and Registered Dietitians (Meet the Fitness Blender Team!). Between all of the workout video options in this program, it's comprised of 30 new (to FB Strong) videos, 1 previously unreleased Plus workout, and 10 of the Fitness Blender Community's all-time favorite strength workouts. These programs can be completed in any order (find Strong Round 1 here). Your trainers are Kelli, Daniel, and Tasha, with appearances by Kayla, and Amanda. This program was built by Kelli.",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-3614-fb-fit-round-3-intense-4-week-workout-program-a946.jpg",
        category:"4 WEEK PROGRAM - 32 MIN/DAY",
        title:"FB Fit - Round 3: Intense 4 Week Workout Program",
        subtitle:"$14.99",
        overview1:"Welcome to FB Fit, Round 3! This program is one of our most intense - with longer, and more advanced workouts. This new round of Fit is like a combination of FB Strong (emphasis on strength training), FB Sweat (flexible schedule), and FB Blend (blended training style), all rolled into one. The main training styles in FB Fit are strength training and HIIT, but as always, we sneak in balance work, Pilates, flexibility, functional strength, agility, etc. You get a daily guide and articles from Experts (Doctors of Physical Therapy, Registered Dietitians, and Certified Personal Trainers) scattered all throughout the program, since we want you to walk away fitter, but also knowing more about fitness and your own body. This program is available for purchase for everyone, and/or included free with an active FB Plus account. ",
        overview2:"This is a clear, easy-to-follow workout plan that uses our full-length workout videos - you'll be doing a different video each day. It's filled with daily helpful tips and guidance, and helps track your progress through the program using our customizable calendar. Workouts are 5 days a week, with an optional 6th recovery day workout, but it's important to note that you can do this workout at any pace (i.e. fewer than 5 workouts a week). FB Fit workout sessions average out to roughly 45 minutes a day - or 60 minutes/day with the (entirely optional) Extra Credit Challenges we have provided each day, in case you have the extra time and energy to spend. The exception is the last day of the program where you'll find a 90 minute 1000 calorie workout. All you need is a set dumbbells and an optional exercise mat.",
        overview3:"FB Fit, Round 3 includes a guide to clean eating that gives you a general, but incredibly effective, rundown on how to eat during this program for better health and faster results (please note, this is a general guide and not a meal plan).   We encourage you to use #FBfit on social media to track your workout sessions, share your progress, find motivation, and connect with people around the world who are following this program. ",
    },

]

let quickWC=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-8622-fb-strong-runner-2-week-strength-focused-challenge-for-improving-running-performance-9544.jpg",
        category:"2 WEEK PROGRAM - 37 MIN/DAY",
        title:"FB Strong Runner: 2-Week Strength-Focused Challenge for Improving Running Performance",
        subtitle:"Included with FB Plus!",
        overview1:"FB Strong Runner is a two-week challenge designed to help runners improve their running pace and form with supplemental strength-focused workouts. Although the lower body muscles are the primary movers during a run, total body strength work is instrumental to injury prevention and enhancing performance. This challenge includes lower body, upper body, core, and low impact/restorative movement workouts, all with exercises that complement the biomechanics of running: This challenge is recommended as part of a larger personal regimen that incorporates strength training and cross-training workouts with specific training runs; you can repeat this challenge as needed to accommodate your training goals and preferences. Make sure to build in recovery between repeated rounds to avoid burnout!",
        overview2:"This challenge was designed for runners looking to improve their running form and pace; however, anyone could benefit from participating in the workouts to improve their activities of daily living and strength training practices. If you are tackling this challenge as a runner, there are optional runs listed on a few of the workout days for you to incorporate into your two-week training regimen. These runs have very loose parameters, because each person has their own unique training goals and levels of fitness as it relates to running. If you need a little extra guidance for determining how to fit this challenge into your running schedule, the following articles could be helpful to you: ",
        overview3:"Workouts are six days each week, average 32 minutes per day, and are mostly level 3 workouts to allow for enough energy to complete the optional runs on days 2, 5, 8, 9, and 12. For most of the workouts, you’ll need a set of weights (or two) and a mat, but a handful of workouts include optional equipment (such as the physio-ball, exercise band, and yoga blocks). ",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-8081-fb-kettlebell-blend-2-week-kettlebell-challenge-for-functional-strength-a591.jpg",
        category:"2 WEEK PROGRAM - 37 MIN/DAY",
        title:"FB Kettlebell Blend: 2-Week Kettlebell Challenge for Functional Strength",
        subtitle:"Included with FB Plus!",
        overview1:"Welcome to Fitness Blender’s Kettlebell Blend Program! This 2-week challenge is designed for those who want to utilize kettlebells in a more structured approach. There are many benefits to kettlebell training, including: By the end of your 2 weeks, you should notice marked improvements in all of these areas.",
        overview2:"This challenge is ideal for those who have some experience with kettlebells and/or a good base of strength before starting. Many of the movements in kettlebell training involve explosive movement patterns and can be considered pretty challenging. If you suffer from chronic back pain, this may not be the challenge for you.",
        overview3:"With many of our kettlebell workouts being a level 4 or 5 out of 5, we’ve designed this challenge with 3 “required” kettlebell workouts per week and 2 “optional” workouts per week that will be of a recovery nature. This way, you can be sure your body can maximize each workout, while effectively recovering between them. You’ll also find a couple days where you get to choose between 2 workouts based on how you’re feeling that day. Feel free to rework your calendar in any way you need to accomplish this challenge. ",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-7590-2-week-fb-reboot-challenge-a-balanced-approachable-return-to-fitness-bb7b.jpg",
        category:"2 WEEK PROGRAM - 37 MIN/DAY",
        title:"2-Week FB Reboot Challenge - A Balanced, Approachable Return to Fitness",
        subtitle:"Included with FB Plus!",
        overview1:"This 2 Week Mobility Challenge is made of FB Plus videos and led by Kayla and Amanda, two Doctors of Physical Therapy. With a focus on mobility, alignment, posture, corrective strength, and stretching moves, this total-body challenge will leave you feeling great from head to toe. FB Mobility was designed by Kelli to help you improve coordination, balance, overall bodily control, agility, and more. This kind of foundational work is a great entry point for becoming more active and a solid way to take your fitness to the next level. Fine-tuning fundamentals with workouts like these can have a significant impact on athletic performance, strength, and power.",
        overview2:"Because these workouts are on the shorter side — and not of a HIIT or heavy lifting nature — this challenge can compliment many of Fitness Blender’s more intense workout challenges and programs. Some of the workouts are of an add-on nature, so you could even fold them into your existing routine for a smarter, more fundamentals-oriented focus. The workouts in this challenge range between 15 and 35 minutes, averaging out to about 24 minutes per day. Note that some workouts in this challenge may need a separate warm up or cool down.",
        overview3:"Each day you'll have a different focus, and you may be surprised to find that many of these workouts can be challenging. Modifications are shown throughout the videos, and on many days, you'll have the choice between two different workouts, varying in exact length and intensity. You don't necessarily need any equipment for this challenge, but here are a few optional things that may be helpful as you make your way through: an exercise mat, a yoga strap/towel/or tee-shirt, a resistance band. ",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/800/800-6547-2-week-fb-mobility-85b1.jpg",
        category:"2 WEEK PROGRAM - 37 MIN/DAY",
        title:"FB Fit - Round 3: Intense 4 Week Workout Program",
        subtitle:"Included with FB Plus!",
        overview1:"Welcome to FB Reboot! This program is designed for those who are coming back from an illness, injury, or workout break to help you get back into exercise in an approachable way. It's common to come back from an extended workout break and want to hit the ground running at your previous intensity to make up for lost time. However, that could increase the risk of injury and/or burnout. FB Reboot is designed to build a solid foundation of strength, cardio, and fundamental movement to get your body and mind back in the rhythm of exercising consistently. We include a combination of level 2 and 3 workouts to help build back up to the appropriate level of intensity for you, in a way that feels good and minimizes risk of injury or burnout." ,
        overview2:"This workout lineup offers a balanced approach including strength training, low-impact cardio, core training, and stretching/flexibility so you can be sure your body is getting what it needs after some time off. Over the course of 2 weeks, we'll gradually increase the intensity and time commitment from shorter (~25 min) level 2 workouts to slightly longer (~40 min) level 3 workouts, allowing you to gradually build back into a consistent routine without shocking your system. There are 5 workouts per week with an optional bonus day, plus extra credit workouts included throughout.",
        overview3:"As you work back into a consistent routine, it's important to be compassionate with yourself. Since it may have been a while since you last exercised consistently, you may find some roadblocks (physically or mentally). If you miss a workout, simply reschedule it without letting it mean you have failed the program. There is no such thing as failure with FB Reboot (or any program, for that matter). You're here for a reason and we're cheering you on every step of the way!",
    },

]

let mp=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-7738-meals-under-30-minutes-meal-plan-for-busy-people-a32a.jpg",
        category:"1 WEEK PROGRAM - 20 MIN/DAY",
        title:"Meals Under 30 Minutes: Meal Plan for Busy People",
        subtitle:"Included with FB Plus!",
        overview1:"Welcome to Fitness Blender's Meals Under 30 Minutes: Meal Plan for Busy People! This is a 1-week program was developed by Registered Dietitians and Recipe Developers to provide a meal plan that is not only easy to use, nutrient-dense, and tailored to busy people, but is also as simple to follow as possible. Our goal is to teach you how to plan your meals in the most healthy, enjoyable, and optimal way. No matter what your goals are, this plan has been built so that it can easily be customized to meet your needs to lose weight, gain weight, or maintain your weight — and at the same time, build a foundation of healthy meals, eating practices, and ideas. This guide is an overview of both the meal plan and a guide of nutrition and food science. ",
        overview2:"Our goal is for you to learn how to eat well for the rest of your life — this is not a diet but a lifestyle. Let this meal plan serve as a general guideline and idea-generating tool for you to use. Learn how to meet your nutritional needs with real food — not with meal replacement shakes, powders, or supplements, but real food. This particular meal plan has been built in conjunction with registered dietitians, based largely off of the kinds of foods that we regularly include in our own personal diets. We believe in eating real, whole foods as often as possible, in order to create a diet that is nutrient-dense, filling, and fully capable of supporting an active lifestyle.",
        overview3:"Whether your goal is weight loss, weight gain, or weight maintenance, this program is going to make reaching your goals much easier. We have laid out everything you need to know in a clear, easy-to-follow format that lists exactly what to eat each day.",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-7128-around-the-world-1-week-omnivore-meal-plan-b211.jpg",
        category:"1 WEEK PROGRAM - 20 MIN/DAY",
        title:"Around the World 1-Week Omnivore Meal Plan",
        subtitle:"Included with FB Plus!",
        overview1:"Welcome to Fitness Blender's new 1 Week Meal Challenge! This program is a one week program developed by Registered Dietitians and Recipe Developers, and reviewed by Doctoral-level Mental Health Professionals, to provide a meal plan that is not only easy to use, nutrient dense, tailored to busy people but also as simple to follow as possible. Our goal is to teach you how to do that in the most healthy, enjoyable, and optimal way. No matter what your goals are, this plan has been built so that it can easily be customized to meet your needs to lose weight, gain weight, or maintain your weight. And at the same time, build a foundation of healthy meals, eating practices and ideas. This guide is an overview of both the meal plan and a guide of nutrition and food science.",
        overview2:"Our goal is for you to learn how to eat well for the rest of your life - this is not a diet but a lifestyle change. This is a tool, a general guideline and an idea generating tool for you to use. We want to...This particular meal plan has been built in conjunctions with registered dietitians, based largely off of the kinds of foods that we regularly include in our own personal diets. We believe in eating real, whole foods as often as possible, in order to create a diet that is nutrient dense, filling, and fully capable of supporting an active lifestyle.",
        overview3:"Whether you are brand new to the concept of healthy eating, or you feel like you are a veteran at making smart food choices, there is a lot to be gained from reading this guide and following this meal plan (after gaining express approval from your personal health care physician, of course).",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-o_21_fb-meal-plan-eat-real-food-and-feel-great.jpg",
        category:"4 WEEK PROGRAM",
        title:"FB Meal Plan - Eat Real Food & Feel Great",
        subtitle:"$24.99",
        overview1:"Good nutrition should taste great and make you feel even better! However, when it comes to planning and preparing healthy meals and snacks, it can sometimes seem overwhelming, so having a bit of structure and guidance may be just what you need. With this in mind, we worked with registered dieticians to create the Fitness Blender Meal Plan, which highlights great-tasting, healthy, whole-foods meals and snacks - giving you everything you need to make some real headway in learning how to fuel your body better. The plan details 3 meals and 3 snacks - every day - for four weeks. Want a sample? Check out a few of the meals to try before you buy. UPDATE: For your convenience, we have updated this program to also be available in an instantly downloadable PDF (as well as in online format).",
        overview2:"There is a corresponding grocery list for each week, and there are 5 different calorie allotments to choose from so that you can customize this plan to meet your exact goals (weight loss, gain, or maintenance). Includes suggestions for modifying for food allergies, intolerance, and availability, as well as food costs, cooking for a family, and more. Couple this 4 Week Meal Plan with our Workout Programs for best results.Most meals are quick and easy to put together, with simple, straight forward recipes that are easily modifiable to the users taste. Meal plan also includes our nutrition guide (found on Day 0) with over 70 pages of tips on how to make the switch to healthy eating, the psychology of food, learning to fuel yourself, understanding your hunger, getting your family to eat healthier, workout tips, and more.",
        overview3:"This meal plan is heavily plant based, with lots of fruits and vegetables and minimally processed natural foods, but it is not vegan or vegetarian. With simple modifications (a topic covered in the meal plan guide), it can easily be altered to be appropriate for a wide variety of eating preferences. Important notes: This meal plan can be repeated at no extra charge, as many times as you like. Use #fitnessblendermealplan on social media to share your progress & recipes, find motivation, and connect with people around the world who are following this program. Proceeds from programs help keep our workout videos & website free for everyone; thank you to everyone who has ever supported FB with a program purchase.",
    },
]

let pilotprograms=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/plan/320/320-7428-2-week-stress-reduction-challenge-b957.jpg",
        category:"2 WEEK PROGRAM - 7 MIN/DAY",
        title:"2-Week Stress Reduction Challenge",
        subtitle:"Included with FB Plus!",
        overview1:"This two-week stress reduction challenge is intended to help participants improve their stress response. Each day, you will engage in an activity intended to help with stress management that will take about 5-10 active minutes. Each task will come with a description of what specifically to do and/or a link to follow along with a video or audio file, so please be sure to read through the descriptions thoroughly before completing the activity. You will have two to three unique options per day to give you some autonomy and choice in the process. For example, throughout the program, there are two days in which you are instructed to engage in relaxation techniques, and within that topic, there are two relaxation technique options. Ideally, you would try each of these once throughout the program. However, if you know one of them doesn’t work for you or that one works particularly well and needs to be repeated, there is flexibility for you to be able to do what works best for you!",
        overview2:"Goals: The primary goal of this stress reduction challenge is to improve your stress response. We will be using data to support this process, in which participants will complete a quick ten-question survey at pre-test, one week into the challenge, and post-test. While we expect that most people will experience some positive change in stress levels, this is only one source of data. Even if your self-rated stress levels don’t change, there could be other things that do happen to indicate that this program is helping. Other indicators of success might simply include the learning of new skills, taking time out of one’s day for self-care, feeling more connected to people you care about, or engaging more frequently in self-reflection. ",
        overview3:"In order to optimize the outcomes of this program, we recommend the following: As always, be sure to share any insights, progress, or questions you have as you progress through the program! Tag #FBStressRedux",
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
