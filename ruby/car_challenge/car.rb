class Car
  attr_accessor :make, :color

  def initialize color='unpainted', speed=0
    # @make = make
    @color = color
    @speed = speed
  end

  def speed
    @speed
  end

  def accelerate amount
    @speed += amount
  end

  def decelerate amount
    if @speed >= amount
      @speed -= amount
    else
      @speed = 0
    end
  end

end