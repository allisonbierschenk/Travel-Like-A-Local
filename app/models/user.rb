class User < ApplicationRecord
  has_secure_password
  has_many :comments, dependent: :destroy
  has_many :posts, dependent: :destroy
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }

  
end
