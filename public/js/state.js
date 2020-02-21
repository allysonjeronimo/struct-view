let state = {
    dataStructure: {
        array: [],
        size: 100,
        delayStruct: 40,
        delayData: 40
    },
    renderer: {
        node: {
            showNumbers: true,
            showIndex: true,
            filledColor: '#8be9fd'
        },
        dom: {
            content: document.getElementById('content')
        },
        alphaValues: [
            '66',
            '77',
            '88',
            '99',
            'aa',
            'bb',
            'cc',
            'dd',
            'ee',
            'ff'
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


