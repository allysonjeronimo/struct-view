import createRenderer from './renderer.js'
import createState from './state.js'
import createUtil from './util.js'

const renderer = createRenderer()
const state = createState()
const util = createUtil()

export default function createDataStructure() {

    function insert(current) {
        if (current < state.getDataStructureState().array.length) {
            state.getDataStructureState().array[current] = util.random()
            renderer.render(current, true)
            setTimeout(() => insert(current + 1), state.getDataStructureState().delay)
        }
        return
    }

    function remove(current, deleteNode) {
        if (current >= 0) {
            if (deleteNode) {
                delete state.getDataStructureState().array[current]
                renderer.renderRemove(current)
            }
            else {
                state.getDataStructureState().array[current] = undefined
                renderer.render(current, true)
            }

            setTimeout(() => remove(current - 1, deleteNode), state.getDataStructureState().delay)
        }
        return
    }

    function create() {
        
        const size = state.getDataStructureState().size
        state.getDataStructureState().array = new Array(size)

        renderer.create()

    }

    function destroy() {
        remove(state.getDataStructureState().array.length - 1, true)
    }

    function fill() {
        renderer.setCursor(0)
        insert(0)
    }

    function empty() {
        renderer.setCursor(state.getDataStructureState().array.length - 1)
        remove(state.getDataStructureState().array.length - 1)
    }

    return {
        create,
        destroy,
        fill,
        empty
    }
}


