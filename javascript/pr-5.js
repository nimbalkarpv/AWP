function bc(){
    let input = document.querySelector("#input").value;

    if(input === "")
    {
        let comment = document.querySelector(".comment");
        comment.style.color = "red";
        comment.innerHTML = "please Enter the something" ;
    }
    else{
        let comment = document.querySelector(".comment");
        comment.innerHTML = input;
    }
    console.log("asdf;j");
}