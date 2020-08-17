let counter = 1;
let likecounter = 1

function like() {

    let l1 = document.querySelector('#id1');

    likecounter = likecounter + 1;

    l1.innerHTML = "Like  " + likecounter;
}

function comment() {

    let newElement = document.createElement("div");

    newElement.textContent = comment 

    newElement.style.background = "tomato";
    newElement.style.margin = "4px";

    let commentbox = document.querySelector('#commentbox');

    commentbox.appendChild(newElement);
    
}