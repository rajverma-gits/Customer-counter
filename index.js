let countEl = document.getElementById("count-el");
let count = 0;

function increment()
{
    count += 1;
    countEl.textContent = count;
}

let saveEl = document.getElementById("save-el");

function save()
{
    let c = count + " - "
    saveEl.textContent += c
    countEl.textContent = 0
    count = 0
}
