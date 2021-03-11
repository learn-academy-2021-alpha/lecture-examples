# rails g migration AddCoatColorToDog

class AddCoatColorToDog < ActiveRecord::Migration[6.1]
  def change
    # add migration definition(:table, :column_name, :data_type)
    add_column :dogs, :coat_color, :string
  end
end
