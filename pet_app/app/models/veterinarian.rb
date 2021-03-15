class Veterinarian < ApplicationRecord
  validates :name, presence: { message: "Please provide a name" }
end
