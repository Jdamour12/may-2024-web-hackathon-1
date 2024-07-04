var tab_links = document.getElementsByClassName("tab-links");
var tab_contents=document.getElementsByClassName("tab-contents");


var side_menu=document.getElementById("side-menu");

function openTab(tab_name) {
    for(tab_link of tab_links) {
        tab_link.classList.remove("active-link");
    }

    for(tab_content of tab_contents) {
        tab_content.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tab_name).classList.add("active-tab");
}


function openMenu(){
    side_menu.style.right="0";
}

function closeMenu(){
    side_menu.style.right="-200px";
}
