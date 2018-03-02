function Stack() {
    this.stack = [];
};

Stack.prototype.push = function(value) {
    this.stack.push(value);
};

Stack.prototype.pop = function() {
    return this.stack.pop();
};

Stack.prototype.peek = function() {
    return this.stack[this.stack.length - 1];
};

var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(122);

console.log(stack.pop());

stack.pop();