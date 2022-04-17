some_var = nil

puts "value of variable some_var: #{some_var.inspect}"

# get attribute of a null variable
puts "For ruby versions > 2.3.0 ---- some_var&.some_attribute"

puts "For ruby versions < 2.3.0 ---- some_var.try(:some_attribute)"
