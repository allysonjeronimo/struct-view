export default function createUtil() {
    
    function random() {
        return Math.floor(Math.random() * 10)
    }

    return {
        random
    }
}



