# id            :integer  not null, primary key
# poll_id       :integer  not null
# choice        :string   not null

class Vote < ApplicationRecord
  belongs_to :poll, class_name: 'Poll'
  belongs_to :user, class_name: 'User'

  validates :choice, presence: true
end

# Vote.create!(poll: Poll.last, user: User.last, choice: 'choice')
