class Node
  attr_accessor :data, :next_node

  def initialize(data = nil, next_node = nil)
    @data = data
    @next_node = next_node
  end
end

class Queue
  attr_reader :front, :rear

  def initialize(front = nil)
    @front = front
    @rear = front
  end

  # ADD NODE TO BACK OF QUEUE
  # USE DATA TO CREATE A NEW NODE AND ADD IT TO THE QUEUE
  def enqueue(data) 
    new_node = Node.new(data)

    if @rear.nil?
      @front = new_node
      @rear = new_node
    else
      @rear.next_node = new_node
      @rear = new_node
    end
  end

  # REMOVE NODE FROM FRONT OF QUEUE AND RETURN IT
  def dequeue
    return nil if @front.nil?

    dequeued_node = @front
    @front = @front.next_node

    if @front.nil?
      @rear = nil
    end

    dequeued_node.data
  end

  # RETURN NODE AT FRONT WITHOUT REMOVING IT
  def peek
    return nil if @front.nil?
    @front.data
  end

  # RETURN TRUE IF QUEUE IS EMPTY, OTHERWISE FALSE
  def isEmpty
    @front.nil?
  end

  # RETURN NUMBER OF NODES IN QUEUE, E.G. 10
  def size
    count = 0
    current_node = @front

    while !current_node.nil?
      count += 1
      current_node = current_node.next_node
    end

    count
  end

  # RETURN INTEGER REPRESENTING HOW FAR TARGET IS FROM FRONT OF QUEUE
  # IF TARGET ISN'T IN QUEUE, RETURN -1
  def search(target) 
    index = 0
    current_node = @front

    while !current_node.nil?
      return index if current_node.data == target

      index += 1
      current_node = current_node.next_node
    end

    -1
  end
end

if __FILE__ == $PROGRAM_NAME
  queue = Queue.new

  # Test enqueue method
  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)

  # Test peek method
  puts queue.peek # Output: 1

  # Test dequeue method
  puts queue.dequeue # Output: 1

  # Test isEmpty method
  puts queue.isEmpty # Output: false

  # Test size method
  puts queue.size # Output: 2

  # Test search method
  puts queue.search(2) # Output: 1
  puts queue.search(4) # Output: -1
end
# Write your Big O findings here

# Optional: Please add your pseudocode to this file
# Optional: And a written explanation of your solution

#creating a new instance of the Queue class called queue. We then enqueue three values (1, 2, 3) into the queue using the enqueue method. We test the peek, dequeue, isEmpty, size, and search methods to verify that the implementation of the Queue class is correct.

#After adding the tests, we can run the file to see the output of the tests.

#Regarding the Big O findings, here are the time complexities for each method of the Queue class:

#enqueue: O(1) - adding a new node to the rear of the queue takes constant time.
#dequeue: O(1) - removing the node from the front of the queue takes constant time.
#peek: O(1) - accessing the data of the front node takes constant time.
#isEmpty: O(1) - checking if the front node is nil takes constant time.
#size: O(n) - iterating through the queue to count the number of nodes takes linear time, where n is the number of nodes in the queue.
#search: O(n) - iterating through the queue to find the target node takes linear time, where n is the number of nodes in the queue.
#These time complexities indicate the efficiency of the operations performed on the Queue class.
