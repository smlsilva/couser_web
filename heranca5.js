console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//---------------------------------------
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse()) // Literal tipo String

//---------------------------------------
Array.prototype.first = function() {
    return this[3]
}

console.log([1,2,3,4,5,6].first())
console.log(['a',2,3,4,5,6].first())

//---------------------------------------
String.prototype.toString = function() {
    return 'Lascou'
}

console.log('Escola Cod3r'.reverse()) // Literal tipo String