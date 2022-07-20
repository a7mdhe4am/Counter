let count = 0 
let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let resetEl = document.getElementById('reset-btn')
function increment() {
    count += 1 
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let countStr = count + ' - ' 
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset() {
    count = 0
    countEl.textContent = count   
}