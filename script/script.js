let menuButton = document.getElementById("menu-button");
let menuItem = document.getElementById("menu-item");

menuButton.addEventListener(("click"),function() {
    if(menuItem.style.display === "none") {
        menuItem.style.display = "block";
    } else {
        menuItem.style.display = "none";
    }
});


window.addEventListener(("resize"), function() {
    if(window.innerWidth > 768) {
        menuItem.style.display = "block";
    } else {
        menuItem.style.display  = "none";
    }
});