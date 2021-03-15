class Dog < ApplicationRecord
  validates :name, presence: true, length: {minimum: 2}
  validates :breed, :coat_color, :birthdate, presence: true
  validates :birthdate, uniqueness: true

  belongs_to :person
end
