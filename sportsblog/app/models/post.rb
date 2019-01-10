class Post < ApplicationRecord
  has_many :comments
  belongs_to :user, class_name: 'User', foreign_key: 'user_id', optional: true
end
