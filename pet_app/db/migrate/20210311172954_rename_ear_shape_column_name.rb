class RenameEarShapeColumnName < ActiveRecord::Migration[6.1]
  def change
    # rename_column(table_name, column_name, new_column_name)
    rename_column(:dogs, :ear_shap, :ear_shape)
  end
end
