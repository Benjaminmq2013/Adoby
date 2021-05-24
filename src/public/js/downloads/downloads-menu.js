import { premium_downloads_template, free_downloads_template, gold_downloads_template } from "./downloads_templates.js"
let download_options_wrapper = document.querySelector(".download_options_wrapper")

let downlod_free_btn = document.querySelector(".downlod_free_btn")
let download_premium_btn = document.querySelector(".download_premium_btn")
let download_gold_btn = document.querySelector(".download_gold_btn")

downlod_free_btn.addEventListener("click", show_free)
download_premium_btn.addEventListener("click", show_premium)
download_gold_btn.addEventListener("click", show_gold)


function show_free(){
    download_premium_btn.classList.remove("premium_active_menu")
    download_gold_btn.classList.remove("gold_active_menu")
    downlod_free_btn.classList.add("free_active_menu")

    download_options_wrapper.innerHTML = free_downloads_template // Changing menu
}

function show_premium(){
    download_gold_btn.classList.remove("gold_active_menu")
    downlod_free_btn.classList.remove("free_active_menu")
    download_premium_btn.classList.add("premium_active_menu")

    download_options_wrapper.innerHTML = premium_downloads_template; // Changing menu
}

function show_gold(){
    download_premium_btn.classList.remove("premium_active_menu")
    downlod_free_btn.classList.remove("free_active_menu")
    download_gold_btn.classList.add("gold_active_menu")

    download_options_wrapper.innerHTML = gold_downloads_template;
}



