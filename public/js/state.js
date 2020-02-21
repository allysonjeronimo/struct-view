let state = {
    dataStructure: {
        array: [],
        size: 50,
        delay: 50
    },
    renderer: {
        node: {
            showNumbers: true,
            showIndex: true
        },
        dom: {
            content: document.getElementById('content')
        },
        colors: [
            '#8be9fd66',
            '#8be9fd77',
            '#8be9fd88',
            '#8be9fd99',
            '#8be9fdaa',
            '#8be9fdbb',
            '#8be9fdcc',
            '#8be9fddd',
            '#8be9fdee',
            '#8be9fdff'
        ]
    }
}

export default function createState() {

    function getDataStructureState() {
        return state.dataStructure
    }

    function getRendererState() {
        return state.renderer
    }

    function getAllState() {
        return state
    }

    return {
        getAllState,
        getDataStructureState,
        getRendererState
    }
}


