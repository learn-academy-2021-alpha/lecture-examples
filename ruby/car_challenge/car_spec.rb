require 'rspec'
require_relative 'car'

describe Car do
  it 'does not raise an error when initialized' do
    expect{ Car.new }.to_not raise_error
  end

  it 'can have a make' do
    my_car = Car.new
    my_car.make = 'Toyota'
    expect(my_car.make).to be_a String
    expect(my_car.make).to eq 'Toyota'
  end

  it 'is unpainted by default' do
    my_car = Car.new
    expect(my_car.color).to eq 'unpainted'
    expect(my_car.color).to be_a String
  end

  it 'can be painted' do
    my_car = Car.new 'Red'
    expect(my_car.color).to eq 'Red'
    expect(my_car.color).to be_a String
  end

  it 'has an initial speed of 0' do
    my_car = Car.new
    #my_car.speed = 50 #cannot do this
    expect(my_car.speed).to eq 0
  end

  it 'can accelerate by an amount' do
    my_car = Car.new
    my_car.accelerate 10
    expect(my_car.speed).to be 10
  end

  it 'can change speed by amount' do
    my_car = Car.new
    expect{ my_car.accelerate 10 }.to change{my_car.speed}.from(0).to(10)
    expect{ my_car.accelerate 20}.to change{my_car.speed}.from(10).to(30)
  end

  it 'can decelerate by an amount and not be negative' do
    my_car = Car.new('Silver', 20)
    expect{ my_car.decelerate 10 }.to change{my_car.speed}.from(20).to(10)
    expect{ my_car.decelerate 20 }.to change{my_car.speed}.from(10).to(0)
  end
end