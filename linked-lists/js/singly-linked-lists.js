'use strict';

let testList1 = {val: 'a', next: {val: 'b', next: {val: 'c', next: null}}};

//standalone function: append item to end of given singly linked list

function appendLL(list, val) { //mutate original list
  let head = list;
  let appended = {val: val, next: null};
  while (list.next != null) {
    list = list.next;
  }
  list.next = appended;
  return head;
}

//console.log(appendLL(testList1, 'd').next);

///////////////////////////////////////////////////////////////////////////

//full linked list implementation

function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyLL(){
  this._length = 0;
  this.head = null;
}

//and node with given value to end of list
SinglyLL.prototype.add = function (val) {
  let node = new Node(val);
  let current = this.head;

  //starting with empty list
  if (!current) {
    this.head = node;
    this._length++;
    return node;
  }
  //adding to non-empty list
  while (current.next) {
    current = current.next;
  }

  current.next = node;
  this._length++;

  return node;
};

//remove node at given position (starting at 1)
SinglyLL.prototype.delete = function(pos) {
  let current = this.head;
  let length = this._length;
  let count = 0;
  let beforeNodeToDelete = null;
  let nodeToDelete = null;
  let deletedNode = null;

  //invalid request
  if (pos < 0 || pos > length) {
    throw new Error('Failure: Invalid position.');
  }

  //first node deleted
  if (pos === 1) {
    this.head = current.next;
    deletedNode = current;
    current = null;
    this._length--;

    return deletedNode;
  }

  while (count < pos) {
    beforeNodeToDelete = current;
    nodeToDelete = current.next;
    count++;
  }

  beforeNodeToDelete.next = nodeToDelete.next;
  deletedNode = nodeToDelete;
  nodeToDelete = null;
  this._length--;

  return deletedNode;
};

//find node at given position (starting at 1)
SinglyLL.prototype.find = function(pos) {
  let current = this.head;
  let length = this._length;
  let count = 1;

  //invalid request
  if (length === 0 || pos < 1 || pos > length) {
    throw new Error('Failure: Invalid position.');
  }

  while (count < pos) {
    current = current.next;
    count++;
  }

  return current;
};

//insert node at given position in list of length > 1 (starting at 1)
SinglyLL.prototype.insert = function(val, pos) {
  let length = this._length;
  let beforeNodeToInsert = this.find(pos -1);
  let nodeToInsert = new Node(val);
  let updatedNext;

  //too few nodes to insert
  if (length <= 1) {
    throw new Error('Failure: Too few nodes. Use add method.');
  }

  //invalid request
  if (pos < 1 || pos > length) {
    throw new Error('Failure: Invalid position.');
  }

  //valid insertion at given position
  updatedNext = beforeNodeToInsert.next;
  beforeNodeToInsert.next = nodeToInsert;
  nodeToInsert.next = updatedNext;

  this._length++;

};


let testList2 = new SinglyLL();

testList2.add('1');
testList2.add('2');
testList2.add('3');
testList2.add('4');

console.log('list:', testList2);
console.log('deleted:', testList2.delete(2));
console.log('list after deletion:', testList2);

testList2.add('5');

console.log('find node with value 4:', testList2.find(3));

testList2.insert('2', 2);

console.log('2 re-inserted:', testList2);
