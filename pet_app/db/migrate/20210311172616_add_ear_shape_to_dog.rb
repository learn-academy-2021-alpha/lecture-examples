class AddEarShapeToDog < ActiveRecord::Migration[6.1]
  def change
    add_column :dogs, :ear_shap, :string
  end
end
