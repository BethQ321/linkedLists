class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);

        if(this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }

        current.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);

        if(this.head === null) {
            this.head = newNode;
            return;
        }

        let temp = this.head;
        this.head = newNode;
        this.head.nextNode = temp;
    }

    size() {
        let current = this.head;
        let count = 0;
        while(current !== null) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    returnHead() {
        if(this.head === null) {
            return null;
        } else {
            return this.head;
        }        
    }

    at(index) {
        let current = this.head;
        for(let i = 0; current !== null && i < index; i++) {
            current = current.nextNode;
        };
        return current;
    }

    returnTail() {
        if(this.head === null) {
            return null;
        } else {
            let num = this.size();
            return this.at(num - 1);
        }
    }

    pop() {
        let num = this.size();
        if(num === 0) {
            return;
        }

        if(num === 1) {
            this.head = null;
        } else {
            let current = this.head;
            for(let i = 0; i < num - 2; i++) {
                current = current.nextNode;
            }
            current.nextNode = null;
        }
    }

    contains(value) {
        let current = this.head;
        while (current !== null) {
            if(value === current.value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let counter = 0;
        while (current !== null) {
            if(value === current.value) {
                return counter;
            }
            current = current.nextNode;
            counter++;
        }
        return null;
    }

    toString() {
        let finalString = "";
        let current = this.head;

        while (current !== null) {
            finalString += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        finalString += "null";
        return finalString;
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.find("do"));