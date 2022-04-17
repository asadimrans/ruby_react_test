class Node
  attr_accessor :value, :left, :right

  def initialize(value = nil, left = nil, right = nil)
    @value = value
    @left  = left
    @right = right
  end
end

class BinarySearchTree
  attr_accessor :root

  def initialize(value)
    puts "Initializing with: #{value}"
    @root = Node.new(value)
  end

  # DFS Traversal: displays the final output in sorted order
  def dfs_traversal(node = root)
    return if node.nil?
    dfs_traversal(node.left)
    puts node.value
    dfs_traversal(node.right)
  end

  # When value > current node, go towards the right
  # when value < current node, go towards the left
  # when a nil node is found, then the new node should be created there
  # No duplicate values are inserted in the tree
  def insert(value)
    puts "Inserting : #{value}"
    current_node = root
    while current_node != nil
      if (value < current_node.value) && (current_node.left.nil?)
        current_node.left = Node.new(value)
      elsif (value > current_node.value) && (current_node.right.nil?)
        current_node.right = Node.new(value)
      elsif (value < current_node.value)
        current_node = current_node.left
      elsif (value > current_node.value)
        current_node = current_node.right
      else
        return
      end
    end
  end
end

bst = BinarySearchTree.new(10)
bst.insert(11)
bst.insert(9)
bst.insert(5)
bst.insert(7)
bst.insert(18)
bst.insert(17)

puts "Depth First Search Traversal:"
bst.dfs_traversal
