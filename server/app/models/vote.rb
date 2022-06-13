# id            :integer  not null, primary key
# poll_id       :integer  not null
# choice        :string   not null

class Vote < ApplicationRecord
  include ChoiceValidable

  belongs_to :poll, class_name: 'Poll'
  belongs_to :user, class_name: 'User', optional: true

  validates :choice, presence: true
end

# Vote.create!(poll: Poll.last, user: User.last, choice: 'choice')
