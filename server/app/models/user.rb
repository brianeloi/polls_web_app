# id        :integer  not null, primary key
# email     :string   not null
# password  :string   not null

class User < ApplicationRecord
  has_many :polls, class_name: 'Poll', foreign_key: 'user_id'
  has_many :votes, class_name: 'Vote', foreign_key: 'user_id'

  acts_as_token_authenticatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end

# User.create!(email: 'email@email.com', password: '123456')
