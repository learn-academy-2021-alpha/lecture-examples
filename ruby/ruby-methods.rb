# Ruby Methods


# def - define
# every def needs a matching end

# def greeter
#   "Hello World"
# end
#
# p greeter
# p greeter
# p greeter

# implicit return - if you don't specify a return the last line of code executed is what will be returned

# This is a valid Ruby method, but you don't have to have a return
# def greeter
#   return "Hello World"
# end


# methods can take arguments
# def greeter name
#   "Hello, #{name}"
# end
#
# p greeter "Sarah"
# p greeter "Alpha"
# p greeter "Mina"

# can wrap arguments in parens, but you don't have to
# def greeter(name)
#   "Hello, #{name}"
# end
#
# p greeter "Sarah"
# p greeter "Alpha"
# p greeter "Mina"


# def multiplier(num1, num2)
#   num1 * num2
# end
#
# p multiplier 4, 5
# p multiplier 4, 7


def greater_than(num1, num2)
  if num1 > num2
    "#{num1} is the greater number"
  elsif num1 < num2
    "#{num2} is the greater number"
  elsif num1 == num2
    "The numbers are the same"
  else
    "Something went wrong"
  end
end

# p greater_than 2, 3
# p greater_than 2, 8
# p greater_than 9, 0
# p greater_than 3, 3

p "Enter a number"
number1 = gets.chomp.to_i
p number1.class
p "Enter a number"
number2 = gets.chomp

p greater_than number1, number2


# Ruby does not handle type coersion
# p greater_than 3, "this is a string" --> error
