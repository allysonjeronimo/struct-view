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
        setCursor(filled ? i + 1 : i - 1)
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

module.exports = {
    
}
