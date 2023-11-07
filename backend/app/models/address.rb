# == Schema Information
#
# Table name: addresses
#
#  id              :bigint           not null, primary key
#  street          :string
#  city            :string
#  state           :string
#  country         :string
#  postal_code     :bigint
#  additional_info :string
#  user_id         :bigint
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Address < ApplicationRecord
end
