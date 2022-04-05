function callback () {
    return 'Hello!'
}

function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction () {
    
    return function helloGreeting () {
        return 'hey hey hey'
    }

}

function returnsAnAnonymousFunction() {
    
    return (function () {
        return 'do you see me'
    })
    
}