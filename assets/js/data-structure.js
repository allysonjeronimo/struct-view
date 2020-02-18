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

module.exports = {
    init,
    insert
}