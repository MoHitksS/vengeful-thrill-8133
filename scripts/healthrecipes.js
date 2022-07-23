import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import { append } from "./healthrecipesfetch.js";

import footer from "../components/footer.js"
document.getElementById("footer").innerHTML = footer();

import {checkLogin} from "../scripts/sigin.js"
checkLogin();

let healthrecipesData=[
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1192-turkey-burger-mini-melt-bc6d.jpg",
        category:"LUNCH, DINNER",
        title:"Turkey Burger Mini Melt",
        content:"Cheesy Skillet Patty Melt",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1154-tofu-pad-thai-with-mango-peanut-sauce-9b3b.jpg",
        category:"DINNER",
        title:"Tofu Pad Thai with Mango Peanut Sauce",
        content:"A Vegan Remix of the Classic Recipe",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1222-berry-yogurt-bowl-with-honey-and-almonds-9693.jpg",
        category:"SNACK, SIDE DISH, DESSERT",
        title:"Berry Yogurt Bowl with Honey and Almonds",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1180-no-churn-chocolate-and-strawberry-ice-cream-8720.jpg",
        category:"SNACK, DESSERT",
        title:"No-Churn Chocolate and Strawberry Ice Cream",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1177-high-protein-lentil-stew-with-chicken-acac.jpg",
        category:"LUNCH DINNER",
        title:"High-Protein Lentil Stew with Chicken",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1176-vegetarian-lentil-bolognese-with-lentils-8256.jpg",
        category:"DINNER",
        title:"Vegetarian Lentil Bolognese",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1162-blackened-chicken-and-pico-de-gallo-side-salad-b8ee.jpg",
        category:"SIDE DISH",
        title:"Blackened Chicken and Pico de Gallo Side Salad",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1163-brussels-sprouts-and-apple-side-salad-af20.jpg",
        category:"SIDE DISH",
        title:"Brussels Sprouts and Apple Side Salad",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1166-chunky-chicken-chef-salad-8d27.jpg",
        category:"LUNCH, DINNER",
        title:"Chunky Chicken Chef Salad",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1147-pasta-e-fagioli-af67.jpg",
        category:"LUNCH, DINNER",
        title:"Pasta e Fagioli",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1170-everything-bagel-toast-with-salmon-9b27.jpg",
        category:"BREAKFAST",
        title:"Everything Bagel Toast with Salmon",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1187-strawberry-citrus-smoothie-ba67.jpg",
        category:"BREAKFAST, SNACKS",
        title:"Strawberry Citrus Smoothie",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1161-energy-boosting-bean-green-and-grain-bowl-9444.jpg",
        category:"LUNCH, DINNER",
        title:"Energy-Boosting Bean, Green, and Grain Bowl",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/1149-vegetarian-chopped-thai-salad-with-mango-peanut-sauce-99b4.jpg",
        category:"LUNCH, DINNER",
        title:"Vegan Chopped Thai Salad with Mango Peanut Sauce",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1183-pesto-tuna-pasta-aa9e.jpg",
        category:"DINNER",
        title:"Pesto Tuna Pasta",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1165-chicken-fajita-stuffed-sweet-potatoes-99b5.jpg",
        category:"LUNCH, DINNER",
        title:"Chicken Fajita Stuffed Sweet Potatoes",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1144-breakfast-tuna-melt-ad36.jpg",
        category:"BREAKFAST",
        title:"High Protein Breakfast Tuna Melt",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1164-buffalo-chickpea-wrap-955e.jpg",
        category:"LUNCH",
        title:"Buffalo Chickpea Wrap",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1171-fattoush-side-salad-b5c8.jpg",
        category:"SIDE DISH",
        title:"Fattoush Side Salad",
        content:"",
    },
    {
        img:"https://d18zdz9g6n5za7.cloudfront.net/blog/320/320-1168-citrus-strawberry-and-cucumber-side-salad-8041.jpg",
        category:"SIDE DISH",
        title:"Citrus, Strawberry, and Cucumber Side Salad",
        content:"",
    },

]

function hrep(healthrecipesData){
    let cont=document.getElementById("healthrecipes")
    append(healthrecipesData,cont)
}
hrep(healthrecipesData)