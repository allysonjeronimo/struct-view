state = {
    array: [],
    size: 10,
    delay: 50,
    dom: {
        content: document.getElementById('content')
    },
    colors: [
        '#103215',
        '#15421B',
        '#1A5322',
        '#206329',
        '#257430',
        '#2A8436',
        '#2F953D',
        '#34A544',
        '#39B54A',
        '#4BBB5A'
    ]
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
        setTimeout(() => insert(current + 1), state.delay)
    }
    return
}

function remove(current, deleteNode) {
    if (current >= 0) {

        if (deleteNode) {
            delete state.array[current]
            renderRemove(current)
        }
        else {
            state.array[current] = undefined
            render(current, true)
        }

        setTimeout(() => remove(current - 1, deleteNode), state.delay)
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
        setTimeout(() => renderRecursive(current + 1), state.delay)
    }
    return
}

function renderRemove(i) {
    document.getElementById(`node-${i}`).remove()
}

function setCursor(i) {
    if (i >= 0 && i < state.array.length) {
        document.getElementById(`content-node-${i}`).classList.add('current-node')
    }
}

function render(i, replace = false) {

    let filled = state.array[i] !== undefined

    let background = filled ? `style='background: ${state.colors[state.array[i]]}'` : ''

    let classes = filled ? 'filled-node' : 'empty-node'

    if (replace) {
        // filling or emptying array
        document.getElementById(`node-${i}`).innerHTML = `
        <div id="content-node-${i}" class="${classes}" ${background}>
            ${filled ? state.array[i] : '-'}
        </div>
        <div class='node-index'>
            ${i}
        </div>
        `
        setCursor(filled ? i + 1: i - 1)
    }
    else {
        // creating a new array
        state.dom.content.innerHTML += `
        <div class='node' id='node-${i}'>
                <div id='content-node-${i}' class=${classes} ${background}>
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
    remove(state.array.length - 1)
}

function handleEmpty() {
    setCursor(state.array.length-1)
    empty()
}

function handleFill() {
    setCursor(0)
    insert(0)
}

function handleCreate() {
    state.array = new Array(state.size)
    state.dom.content.innerHTML = ''
    renderRecursive(0)
}

function handleDestroy() {
    remove(state.array.length - 1, true)
}



