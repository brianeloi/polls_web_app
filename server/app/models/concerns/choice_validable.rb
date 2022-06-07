module ChoiceValidable
  extend ActiveSupport::Concern

  included do
    before_validation :validate_choice
  end

  private

  def validate_choice
    return if poll.choices.include?(choice)

    msg = "Choice '#{choice}' isn't listed on Poll's choices: #{poll.choices}"
    errors.add(:choice, msg)
  end
end
