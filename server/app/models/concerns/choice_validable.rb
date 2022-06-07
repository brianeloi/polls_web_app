module ChoiceValidable
  extend ActiveSupport::Concern

  included do
    before_validation :validate_choice
  end

  private

  def validate_choice
    return if self.poll.choices.include?(self.choice)

    msg = "Choice '#{self.choice}' isn't listed on Poll's choices: #{self.poll.choices}"
    self.errors.add(:choice, msg)
  end
end
