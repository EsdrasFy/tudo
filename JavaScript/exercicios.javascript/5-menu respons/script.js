function openNav() {
    document.getElementById("myNav").style.width= "100%";

    if(openNav.checked){
        document.getElementsByClassName("nav-button").style.display = "none";
    }
}
function closeNav() {
    document.getElementById("myNav").style.width= "0";
}