const plans_card_free= document.querySelector(".plans_card_free")
const plans_card_premium = document.querySelector(".plans_card_premium")
const plans_card_gold = document.querySelector(".plans_card_gold")

const next_plan_image = document.getElementById("next_plan_image")
const last_plan_image = document.getElementById("last_plan_image")

function show_free_plans(){
    plans_card_premium.classList.remove("card_to_center")
    plans_card_premium.classList.add("card_to_right")
    plans_card_free.classList.remove("card_to_left")
    plans_card_free.classList.add("card_to_center")

    last_plan_image.classList.add("disappear")
}

function show_premium_plans(){
    plans_card_free.classList.remove("card_to_center")
    plans_card_free.classList.add("card_to_left")
    
    plans_card_gold.classList.remove("card_to_center")
    plans_card_gold.classList.add("card_to_right")
    
    plans_card_premium.classList.remove("card_to_right")
    plans_card_premium.classList.remove("card_to_left")
    plans_card_premium.classList.add("card_to_center")

    last_plan_image.classList.remove("disappear")
    next_plan_image.classList.remove("disappear")

}

function show_gold_plans(){
    plans_card_gold.classList.remove("card_to_right")
    plans_card_gold.classList.add("card_to_center")

    plans_card_premium.classList.remove("card_to_center")
    plans_card_premium.classList.add("card_to_left")

    next_plan_image.classList.add("disappear")
}

export{ show_free_plans, show_premium_plans, show_gold_plans }