class Test
  class << self
    # class method to return array satisfying some condition
    def do_computation(array)
      array.select{|x| (x * 2 - (5 - x)).even?}
    end
  end
end

array = [1, 4, 5, 7, 12, 19, 45, 101]
puts Test.do_computation(array)
