import createState from './state.js'
const state = createState()

export default function createRenderer() {

    function renderRecursive(current) {
    
        if (current < state.getDataStructureState().size) {
            render(current)
            setTimeout(() => renderRecursive(current + 1), state.getDataStructureState().delay)
        }
        return
    }

    function renderRemove(i) {
        document.getElementById(`node-${i}`).remove()
    }

    function setCursor(i) {
        console.log('setCursor() - ' + i)
        if (i >= 0 && i < state.getDataStructureState().size) {
            document.getElementById(`content-node-${i}`).classList.add('current-node')
        }
    }

    function render(i, replace = false) {

        let filled = state.getDataStructureState().array[i] !== undefined

        let background = filled ? `style='background: ${state.getRendererState().colors[state.getDataStructureState().array[i]]}'` : ''

        let classes = filled ? 'filled-node' : 'empty-node'

        if (replace) {
            // filling or emptying array
            document.getElementById(`node-${i}`).innerHTML = `
            <div id="content-node-${i}" class="${classes}" ${background}>
                ${filled ? state.getDataStructureState().array[i] : '-'}
            </div>
            <div class='node-index'>
                ${i}
            </div>
            `
            setCursor(filled ? i + 1 : i - 1)
        }
        else {
            // creating a new array
            state.getRendererState().dom.content.innerHTML += `
            <div class='node' id='node-${i}'>
                    <div id='content-node-${i}' class=${classes} ${background}>
                        ${filled ? state.getDataStructureState().array[i] : '-'}
                    </div>
                    <div class='node-index'>
                        ${i}
                    </div>
                </div>
        `
        }

    }

    function create() {
        state.getRendererState().dom.content.innerHTML = ''
        renderRecursive(0)
    }

    return {
        create,
        render,
        renderRemove,
        setCursor
    }
}





