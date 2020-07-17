const btnDarkMode = document.querySelector(".dark_mode_btn");

function save(c){
    let currentClass = c.className();
    console.log(currentClass);
}


function init(){
    btnDarkMode.addEventListener("click", save);
}

init();