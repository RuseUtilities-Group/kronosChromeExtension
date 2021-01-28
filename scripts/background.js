const item = document.getElementById("newTab");

if(localStorage.getItem("a") === "0" || localStorage.getItem("a")){
    item.checked = false;
    localStorage.setItem("a", "0");
} else item.checked = true;

function choiceOn(){
    if(newTab.checked === true){
        localStorage.setItem("a", "1");
    } else localStorage.setItem("a", "0");
}