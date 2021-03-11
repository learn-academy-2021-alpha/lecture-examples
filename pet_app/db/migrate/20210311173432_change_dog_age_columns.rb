class ChangeDogAgeColumns < ActiveRecord::Migration[6.1]
  def change
    change_table :dogs do |t|
      # remove age column
      t.remove :age

      # add birthdate column
      t.datetime :birthdate
    end
  end
end
