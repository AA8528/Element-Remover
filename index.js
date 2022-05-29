let liElement = document.querySelectorAll("li")

for(i=0;i<liElement.length;i++){
    liElement[i].addEventListener("click" , eventHandler )
    function eventHandler(){
        let element = document.getElementById("li_id");
        element.remove();
    }
}