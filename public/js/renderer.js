import createState from './state.js'
const state = createState()

export default function createRenderer() {

    const CURSOR_GREEN = 0
    const CURSOR_RED = 1

    function renderRecursive(current) {
        if (current < state.getDataStructureState().size) {
            render(current)
            setTimeout(() => renderRecursive(current + 1), state.getDataStructureState().delayStruct)
        }
        return
    }

    function renderRemove(i) {
        document.getElementById(`node-${i}`).remove()
    }

    function setCursor(i, type = CURSOR_GREEN) {
        if (i >= 0 && i < state.getDataStructureState().size) {
            let nodeElement = document.getElementById(`content-node-${i}`)
            nodeElement.classList.add(type === CURSOR_GREEN ? 'cursor-border' : 'cursor-border-cancel')
        }
    }

    function render(i, replace = false) {

        let filled = state.getDataStructureState().array[i] !== undefined

        let index = state.getRendererState().node.showIndex ? i : ''

        let color = state.getRendererState().node.filledColor + state.getRendererState().alphaValues[state.getDataStructureState().array[i]]

        let background = filled ? `style='background: ${color}'` : ''

        let classes = filled ? 'filled-node' : 'empty-node'

        let contentNode = ''

        if (state.getRendererState().node.showNumbers) {
            contentNode = filled ? state.getDataStructureState().array[i] : '-'
        }

        if (replace) {
            // filling or emptying array
            document.getElementById(`node-${i}`).innerHTML = `
            <div id="content-node-${i}" class=${classes} ${background}>
                ${contentNode}
            </div>
            <div class='node-index'>
                ${index}
            </div>
            `
        }
        else {
            // creating a new array
            state.getRendererState().dom.content.innerHTML += `
            <div class='node' id='node-${i}'>
                    <div id='content-node-${i}' class=${classes} ${background}>
                        ${contentNode}
                    </div>
                    <div class='node-index'>
                        ${index}
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





