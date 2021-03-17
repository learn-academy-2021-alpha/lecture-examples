class CreateHerbs < ActiveRecord::Migration[6.0]
  def change
    create_table :herbs do |t|
      t.string :name
      t.string :is_watered

      t.timestamps
    end
  end
end
