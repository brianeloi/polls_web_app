# id            :integer  not null, primary key
# title         :string   not null
# description   :text
# user_id       :integer  not null

class Poll < ApplicationRecord
  belongs_to :user, class_name: 'User'
  has_many :votes, class_name: 'Vote', foreign_key: 'poll_id'

  validates :title, presence: true

  def choices
    JSON.parse self[:choices]
  end
end

# Poll.create!(title: 'title', description: 'description', user: User.last)
