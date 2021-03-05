# Class Inheritance

class Food
  attr_accessor :classification

  def initialize classification
    @classification = classification
  end

  def get_info
    puts "The classification is #{@classification}"
  end
end

food = Food.new "fruit"
# p food


# Child < Parent
class Berry < Food
  attr_accessor :type, :mold_status

  def initialize(classification, type)
    super(classification)
    @type = type
    @mold_status = "Not Moldy"
  end

  def make_moldy
    @mold_status = "Very Moldy"
  end

  def get_info
    super
    puts "In Berry Instance"
  end
end

# berry1 = Berry.new "berry"
# p berry1

# super is a method that calls the parent's method of the same name

banana = Berry.new("fruit", "banana")
# p banana
# p banana.type
# p banana.classification

tomato = Berry.new("fruit", "tomato")
# p tomato.mold_status
tomato.make_moldy
# p tomato.mold_status
tomato.get_info



