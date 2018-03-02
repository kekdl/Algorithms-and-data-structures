function Queue() {
    this.queue = [];
}

Queue.prototype.enqueue = function(value) {
    this.queue.push(value);
};

Queue.prototype.dequeue = function() {
    return this.queue.shift();
};

Queue.prototype.peek = function() {
    return this.queue[0];
}

var queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);

queue.peek();

queue.dequeue();
console.log(queue.peek());