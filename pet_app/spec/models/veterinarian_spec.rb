require 'rails_helper'

RSpec.describe Veterinarian, type: :model do
  it 'must have a name' do
    # Arrange/Act
    dolittle = Veterinarian.create name:' '

    # Assert
    expect(dolittle.errors[:name]).to_not be_empty
    expect(dolittle.errors[:name].first).to eq 'Please provide a name'
  end
end
