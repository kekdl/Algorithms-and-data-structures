function Node(data) {
    this.data = data;
    this.next = null;
}
/* список*/
function SingleLinkedList() {
    this.head = null;
    this.tail = null;
    this.numberOfValues = 0;
};

SingleLinkedList.prototype.lenght = function() {
    return this.numberOfValues;
};

SingleLinkedList.prototype.add = function(data) {
    var node = new Node(data);
    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        this.tail = node;
    }
    this.numberOfValues++;
};

SingleLinkedList.prototype.remove = function(data) {
    var previus = this.head;
    var current = this.head;
    while (current) {
        if (current.data === data) {
            if (current === this.head) {
                this.head = this.head.next;
            }
            if (current === this.tail) {
                this.tail = previus;
            }
            previus.next = current.next;
            this.numberOfValues--;
        } else {
            previus = current;
        }
        current = current.next;
    }
};