let array = []
let content = document.getElementById('content')

function random(){
    return Math.floor(Math.random()*10)
}

function init() {
    for (let i = 0; i < 50; i++) {
        array.push(random())
    }
}

// function renderAll() {
//     for (let i = 0; i < array.length; i++) {
//         setTimeout(() => render(array[i]), 0 * 500000)
//     }
// }

function renderRecursive(current) {
    if (current < array.length) {
        render(current)
        setTimeout(() => renderRecursive(current + 1), 100)
    }
    return
}


function render(i) {
    content.innerHTML += `
            <div class='item-node'>
                ${array[i]}
            </div>
        `
}

function empty() {
    array = []
    content.innerHTML = ''
}

function fill() {
    init()
    renderRecursive(0)
}
