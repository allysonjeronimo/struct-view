state = {
    array: [],
    size: 10,
    dom: {
        content: document.getElementById('content')
    }
}

function random() {
    return Math.floor(Math.random() * 10)
}

function init() {
    for (let i = 0; i < state.size; i++) {
        state.array[i] = random()
    }
}

function insert(current) {
    if (current < state.array.length) {
        state.array[current] = random()
        render(current, true)
        setTimeout(() => insert(current + 1), 50)
    }
    return
}

function remove(current, deleteNode) {
    if (current >= 0) {
        
        if(deleteNode){
            delete state.array[current]
            renderRemove(current)
        }
        else{
            state.array[current] = undefined
            render(current, true)
        }
            
        setTimeout(() => remove(current - 1, deleteNode), 50)
    }
    return
}

function renderAll() {
    for (let i = 0; i < state.array.length; i++) {
        render(i)
    }
}

function renderRecursive(current) {
    if (current < state.array.length) {
        render(current)
        setTimeout(() => renderRecursive(current + 1), 50)
    }
    return
}

function renderRemove(i) {
    document.getElementById(`node-${i}`).remove()
}

function render(i, replace = false) {

    let filled = state.array[i] !== undefined

    if (replace) {
        document.getElementById(`node-${i}`).innerHTML = `
        <div class=${filled ? 'filled-node' : 'empty-node'}>
            ${filled ? state.array[i] : '-'}
            </div>
        <div class='node-index'>
            ${i}
        </div>
        `
    }
    else {
        state.dom.content.innerHTML += `
    <div class='node' id='node-${i}'>
                <div class=${filled ? 'filled-node' : 'empty-node'}>
                    ${filled ? state.array[i] : '-'}
                </div>
                <div class='node-index'>
                    ${i}
                </div>
            </div>
    `
    }

}

function empty() {
    remove(state.array.length-1)
}

function handleEmpty() {
    empty()
}

function handleFill() {
    insert(0)
}

function handleCreate() {
    state.array = new Array(state.size)
    state.dom.content.innerHTML = ''
    renderRecursive(0)
}

function handleDestroy(){
    remove(state.array.length-1, true)
}



