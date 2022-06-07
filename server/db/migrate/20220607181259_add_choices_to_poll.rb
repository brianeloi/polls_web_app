class AddChoicesToPoll < ActiveRecord::Migration[6.0]
  def change
    add_column :polls, :choices, :text, array: true, default: [].to_yaml
  end
end
