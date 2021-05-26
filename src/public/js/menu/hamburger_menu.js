const menu_btn = document.querySelector(".menu_icon_container")
const close_menu_btn = document.querySelector(".hamburger_background")
const close_menu_image = document.querySelector(".close_menu_icon")
const hamburger_menu = document.querySelector(".hamburger_menu")
const plans_container = document.querySelector(".plans_container")

menu_btn.addEventListener("click", show_menu)
close_menu_btn.addEventListener("click", hide_menu)
close_menu_image.addEventListener("click", hide_menu)

function show_menu(){
    hamburger_menu.classList.add("show_menu")
    close_menu_btn.classList.remove("display-none")
    hamburger_menu.classList.remove("display-none")
    close_menu_btn.classList.remove("disappear")
    
    plans_container.classList.add("hide_under_menu")
}

function hide_menu(){
    hamburger_menu.classList.remove("show_menu")
    hamburger_menu.classList.add("hide_menu")
    close_menu_btn.classList.add("disappear")
    plans_container.classList.remove("hide_under_menu")
    setTimeout(()=>{
        close_menu_btn.classList.add("display-none")
        hamburger_menu.classList.add("display-none")
    }, 500)
}