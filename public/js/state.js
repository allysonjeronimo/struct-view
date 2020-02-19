let state = {
    dataStructure: {
        array: [],
        size: 10,
        delay: 100
    },
    renderer: {
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


