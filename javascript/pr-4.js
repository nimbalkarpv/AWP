function sumbit()
{
    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;

    let chipkao = document.querySelector(".chipkao");
    let name = fname + " " + lname ;
    // chipkao.textContent = name;
    chipkao.innerHTML = name;

    console.log("submit mai hu");
}