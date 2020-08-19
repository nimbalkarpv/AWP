function Comments(){

    let input = document.querySelector("#input").value;

    let newElement = document.querySelector(".cont").cloneNode(true);
    newElement.children[0].innerHTML = input;

    let commentBox = document.querySelector(".commentBox");
    commentBox.insertBefore(newElement, commentBox.firstChild);
    console.log("comment mai hu");
    console.log(newElement.children[0]);

    document.querySelector("#input").value ="";
}

               
function Deletecom(btnelement){
    // let btnelement = document.querySelector("")
    btnelement.parentElement.remove();
}