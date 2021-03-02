# Yukihiro "Matz" Matsumoto

# Interactive Ruby (irb)

# Ruby Data Types
# Numbers (Integers)
# p 2+4
# p 4-3
# p 9*9
# p 8/4
# p 7/2
# p 7%4
# p 6**2

# Numbers (Floats)
# p 7.0/2
# p 0.15 + 0.3 
# p (0.15 + 0.3).round(4)

# NaN and Infinity
# For Integers
# p 5/0 ZeroDivisionError
# p 0/0 ZeroDivisionError

# For Floats
# p 5.0/0 Infinity
# p 0.0/0 NaN

# Booleans
# Equality Operator ==
# p 5 == 5 true
# p 5 != 4 true
# Relational/Comparison Operators
# p 6 > 4
# p 8 < 9
# p 15 <= 13
# p 8 >= 2

# Logical Operators
# p 8 >= 2 && 15 <= 13 false
# p 8 >= 2 || 15 <= 13 true

# Strings
# p "hello"
# p "It's a wonderful day"

# Built-in methods! Dot notation!
# p 'Hello'.upcase  'HELLO'
# p 'HELLO'.downcase "hello"
# p 'hello'.capitalize  "Hello"
# p 'hello'.reverse    "olleh"
# p 'hello ' * 3    "hello hello hello "
# Chain Methods
# p "hello".upcase.reverse "OLLEH"
# p "this is a sentence".capitalize    "This is a sentence"

# Other data types
# nil - a data types representing nothing
# symbol - a variation of string that is always referenced from the same place
# used as unique identifiers
# p "a string".object_id
# p "a string".object_id
# p "a string".object_id
# p "a string".object_id
# p "a string".object_id

# p :a_symbol.object_id
# p :a_symbol.object_id
# p :a_symbol.object_id

# p :whatever_this_is

# Variables
# naming convention is snake_case
# must assign a value to a variable
# p first_string   => NameError
# p first_string = "a string."
# p first_string.object_id
# my_num = 1
# p my_num

# String Interpolation
#      #{}
# num1 = 2
# num2 = 10
# p "The number #{num1} is less than #{num1 + num2}"

# Arrays and Methods
# nums = [8, 9, 10, 11, 12, 13]
# p nums

# length
# p nums.length
# reverse
# p nums.reverse
# Return the first item
# p nums[0]
# p nums.reverse.first  => 13
# p nums.first  => 8
# p nums.last  => 13
# p nums[4]  => 12
# p nums[20]    => nil

# Assign a value to a particular index in an array
# nums[2] = 100
# p nums

# If the index doesn't exist, Ruby will assign the value and fill in between indexes with nil
# nums[20] = 1000
# p nums  => [8, 9, 100, 11, 12, 13, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, nil, 1000]

# Append operator (shovel); same as .push()
# p [1,2,3] << 99

# Accessors vs Mutators!
# nums.reverse!
# p nums

# Output
# p -- print
# print "Hello World"  -- not followed by new line
# p "Hello World" -- followed by new line 
# puts "Hello World" -- put string without quotes

# puts [1,2,3] -- each value has new line
# print [1,2,3] -- displays [1,2,3] with no new line


# Getting user input
# gets

puts "Enter your name"
name = gets.chomp
# .chomp  --only removes newline characters
puts "Hello, #{name}. How are you today?"





