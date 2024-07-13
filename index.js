const callback = () => {
    console.log('I am a callback')
}

function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    return function named() {
        console.log('I am a function')   
}}

function returnsAnAnonymousFunction() {
    return function () {}
}
