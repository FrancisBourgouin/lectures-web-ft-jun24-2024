class CreateMaps < ActiveRecord::Migration[7.2]
  def change
    create_table :maps do |t|
      t.string :name
      t.string :keywords
      t.string :likes

      t.timestamps
    end
  end
end
