class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor(front = null) {
    this.front = front;
    this.rear = front;
  }

  // ADD NODE TO BACK OF QUEUE
  // USE DATA TO CREATE A NEW NODE AND ADD IT TO THE QUEUE
  enqueue(data) {
    const newNode = new Node(data);
  if (this.isEmpty()) {
    this.front = newNode;
    this.rear = newNode;
  }else{
     this.rear.next = newNode;
     this.rear = newNode ;
     }
  }

  // REMOVE NODE FROM FRONT OF QUEUE AND RETURN IT
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
  const removeNode = this.front;
  this.front = this.front.next;
  if(this.front === null {
  }
    return removedNode;
  }

  // RETURN NODE AT FRONT WITHOUT REMOVING IT
 peek() {
  if (this.isEmpty()) {
    return null;
  }
  return this.front;
}

  // RETURN TRUE IF QUEUE IS EMPTY, OTHERWISE FALSE
  isEmpty() {
   return this.front === null;
 }

  // RETURN NUMBER OF NODES IN QUEUE, E.G. 10
  size() {
  let count = 0;
  let currentNodde = this.front;
  while (currentNode != null) {
    count++;
    currentNode = currentNode.next;
   }
    reuturn count;
  }


  // RETURN INTEGER REPRESENTING HOW FAR TARGET IS FROM FRONT OF QUEUE
  // IF TARGET ISN'T IN QUEUE, RETURN -1
  search(target) {
 let distance = 0;
 let currentNode = this.front;
 while (currentNode !== null) {
  if(currentNode.data ==== target) {
    return distance;
  }
  distance++;
  curentNode = currentNode.next
   }
   return -1;
}

if (require.main === module) {
  // add your own tests in here
 
}

module.exports = {
  Node,
  Queue
};

// Write your Big O findings here

// Optional: Please add your pseudocode to this file
// Optional: And a written explanation of your solution


function findELEment(arr, target):
iterate over arr:
if element == target
  return true
return  false

//// We need not concern ourselves with the time it takes to grab the 0th element or return true or false - those tasks always take the same amount of time, and therefore, are not the weakest link. The weakest link is the iteration over the array, which depends on the length of the array, so it has the potential to take up the most time. If the array is one element long: great, it'll be super fast. But if it contains one million elements, that's going to take some time. Since the amount of time directly correlates with the length of the array (which we call n), Big O for this algorithm is O(n).

function find_lowest_and_highest(arr)
result = []
result = []
result << iterate and find minimum in arr
result << iterate and find maximum in arr
return result  

//We need not concern ourselves with the time it takes to grab the 0th element or return true or false - those tasks always take the same amount of time, and therefore, are not the weakest link. The weakest link is the iteration over the array, which depends on the length of the array, so it has the potential to take up the most time. If the array is one element long: great, it'll be super fast. But if it contains one million elements, that's going to take some time. Since the amount of time directly correlates with the length of the array (which we call n), Big O for this algorithm is O(n).


function nested_loop_quadratic_time(arr):
 iterate over arr:
 iterate over arr:
 perform some operaton 



function useless_log_n_loop(arr):
n = length of arr 


while n > 0;
 print arr[n]
 n =n/ 2


 //Pseudocode
 //round down n to nearest integer

//Pseudocode:
// iterate over the arr:
//if the current element is equal to the target, return true. Return false
//Big ) complexity: O(n), where n is the length of the arr. THis algorithm has a linear time complexity because it iterates over the array once. find_the lowest_and_highest(arr):
//Pseudocode: Create an empty result array. iterate over the arr and find the minimum element. Append it to the result array.. return the result array.
 //Big O complexity: O(n), where ni is the length of the arr. This algorithm iterates over the array twice, but the number of iterations is directly proportional to the length of the array.
 //nested_loop_quadratic_time(arr):
 //Pseusocode: iteratte over the arr:  iterate over the arr: performs some  operation. Big O complexity: O(n), where n is the length of the  arr. THis alggorithm iterates over the array twice, but the number of iterations is directly proportional to the length of the aray.
 //nested_loop_quadratic_time(arr):
 //Pseudocode:
 //iterate over the arr:
 //iterate over the arr:
 //Perform some operation.
 //Big O complexity: O(n^2), where n is the length og the arr. THis algorithm has a quadratic time complexity becuase it iterates over the array  twice nested. useless_log_n_loop(arr):
 //Pseudocode:
 //Set n as the length of the arr.
 //While n is greater than 0:
 //Print arr[n].
 //Set n as n/2 rounded down to the nearest integer.
 //Big O complexity: O(logn), where n is the length of the arr. THis algorithm has a logarithmic time complexity because the number of iterations decreases by hald in each loop.

