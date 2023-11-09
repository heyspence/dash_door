# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  phone_number    :string
#  email           :string           not null
#  country         :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :first_name,
        presence: true,
        length: { in: 3..30 },
        format: { with: /\A[a-zA-Z]+\z/,
        message: "Name can only contain letters" }
    validates :last_name,
        presence: true,
        length: { in: 3..30 },
        format: { with: /\A[a-zA-Z]+\z/,
        message: "Name can only contain letters" }
    validates :phone_number,
        length: { is: 10 },
        format: { with: /\A\+?[1-9]\d{1,14}\z/ }
    validates :email,
        uniqueness: true, 
        length: { in: 3..255 }, 
        format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password,
        presence: true,
        allow_nil: true,
        length: { in: 8..200 }
    validates :password_digest, 
        presence: true
    validates :session_token,
        presence: true,
        uniqueness: true

    has_secure_password
    
end
