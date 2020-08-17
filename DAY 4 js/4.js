let counter = 1

function increment() {
    let inele = document.querySelector('#id1');

    counter = counter + 1;

    inele.innerHTML = counter;
}

function decrement() {

    let deele = document.querySelector('#id1');

    counter = counter - 1;

    deele.innerHTML = counter;
}