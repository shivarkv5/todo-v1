exports.date = () => {
    const date = new Date();
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }
    return date.toLocaleDateString("en-US", options)
}

exports.day = () => {
    let date = new Date();
    let options = {
        weekday: 'short',
    }
    return date.toLocaleDateString("en-US", options)
}

console.log(module.exports)