let counter = 1;

function increment() {

    let inelement = document.querySelector('#id1')

    counter = counter + 1;

    inelement.innerHTML = counter;
}



function decrement() {

    let decelement = document.querySelector('#id1');

    counter = counter - 1;

    decelement.innerHTML = counter;
}