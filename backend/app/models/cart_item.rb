# == Schema Information
#
# Table name: cart_items
#
#  id           :bigint           not null, primary key
#  user_id      :bigint           not null
#  menu_item_id :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class CartItem < ApplicationRecord
    belongs_to :user
    belongs_to :menu_item
end
