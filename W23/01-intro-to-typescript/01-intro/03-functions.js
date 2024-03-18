"use strict";
// Functions return values and accept values
function demo() {
    // this function returns  a value of type 'number'
    return 4;
}
function returnsNothing() {
    // when a function returns nothing then is of type void
}
function withParams(a, b) {
    return String(a + b);
}
console.log(withParams(3, 4));
function ReactComponent(props) {
    return "Something";
}
