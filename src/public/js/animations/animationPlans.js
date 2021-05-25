// Animations for the plan carousel
import { show_free_plans, show_premium_plans, show_gold_plans } from "./toggle_plans.js"


const next_plan = document.querySelector(".next_plan")
const last_plan = document.querySelector(".last_plan")

let state = 2;

next_plan.addEventListener("click", ()=>{
    if(state >= 3){
        console.log("No hay más planes qué mostrar")
    } else{
        state++
        animation_plans(state)
    }
})

last_plan.addEventListener("click", ()=>{
    if(state <= 1){
        console.log("No hay más planes qué mostrar")
    } else{
        state--
        animation_plans(state)
    }
})


function animation_plans(state){    
    switch (state) {
        case 1:
            show_free_plans()
            break;
        case 2:
            show_premium_plans()
            break
        case 3:
            show_gold_plans()
            break
        default:
            console.log("Default value")
            break;
    }
}



