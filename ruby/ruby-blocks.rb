# Ruby Blocks and Iterations

# Block - anonymous functions that passed to a built in method
# Defining a block - do/end or {}

# Types of Iterators

# Times - an iterator that must be called on a number

5.times do
  p 'hello'
end

5.times { p 'hi' }


# Each - an iterator that must be called on an array/range/hash

num = [2, 3, 4, 5]

# Runs the logic the number of times the array is long
num.each do
  p 'hey'
end

# Can access the value of the array by passing an argument to the block - inside pipes
num.each do |value|
  p value * 3
end


# While - runs a until a condition is met

num = 1
while num <= 10
  p num
  num += 1
end


# Ranges

numbers = -5..5
numbers.each do |value|
  if value % 2 == 0
    p value
  end
end

# Using a Ruby method for determining if a value is even, returns a boolean
numbers.each do |value|
  if value.even?
    p value
  end
end

# Using a Ruby method for determining if a value is odd, returns a boolean
numbers.each do |value|
  if value.odd?
    p value
  end
end

letters = 'a'..'z'
letters.each do |value|
  p value
end

# Ranges can be used to populate an array
nums = [*1..10]

# Map - acts on an array and gets passed a block
multipler = nums.map do |value|
  value * 3
end

p multipler
# The original array is unchanged
p nums

multipler = nums.map do |value|
  if value.even?
    'even'
  else
    'odd'
  end
end

p multipler

# Wrapping map inside a custom method

nums1 = [*1..10]
nums2 = [*1..5]
nums3 = [*10..15]

def even_or_odd array
  array.map do |value|
    if value.even?
      'even'
    else
      'odd'
    end
  end
end

p even_or_odd nums1
p even_or_odd nums2
p even_or_odd nums3

# Select - like filter, acts on an iterable and returns a subset
def evens_only array
  array.select do |value|
    value.even?
  end
end

p evens_only nums1
p evens_only nums2
p evens_only nums3


# Select with index - chain the with_index to select/map then pass the index argument
def evens_only array
  array.select.with_index do |value, index|
    index.even?
  end
end

p evens_only nums1
p evens_only nums2
p evens_only nums3
