class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :phone_number, unique: true
      t.string :email, null: false, unique: true
      t.string :country
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true

      t.timestamps
    end

    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true
  end
end
