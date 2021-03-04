# Ruby Classes and Objects

# p "hello".class
# p "hello".class.class
# p 1.class

# class Person
# end

# person1 = Person.new
# person2 = Person.new
# person3 = Person.new
# p person1
# p person2
# p person3

# Instance variables live within a class instance
# Used to represent/hold state within an object

class Person
  # nouns for data
  attr_accessor :name, :pets

  def initialize name, pets
    @name = name
    @pets = pets
  end

  # # mutator method
  # def set_name name
  #   @name = name
  # end

  # accessor method
  # def get_name
  #   @name
  # end

  # def pets
  #   @pets
  # end

  # verbs for methods/behavior
  def introduce_self
    "Hi there, I am #{@name}!"
  end
end

mina = Person.new "Mina", []
# mina.name = "Sarah"
# p mina.get_name
# p mina.pets
# mina.pets << "Churro"
# p mina.pets.length
# mina.name = "Sarah"
# p mina.class
p mina.introduce_self