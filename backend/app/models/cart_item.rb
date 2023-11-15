# == Schema Information
#
# Table name: cart_items
#
#  id            :bigint           not null, primary key
#  users_id      :bigint           not null
#  menu_items_id :bigint           not null
#  quantity      :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class CartItem < ApplicationRecord
    has_one :user
    has_one :menu_item
end
