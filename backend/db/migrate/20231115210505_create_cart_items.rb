class CreateCartItems < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_items do |t|
      t.references :users, null: false, foreign_key: true
      t.references :menu_items, null: false, foreign_key: true
      t.integer :quantity, null: false
      
      t.timestamps
    end
  end
end
