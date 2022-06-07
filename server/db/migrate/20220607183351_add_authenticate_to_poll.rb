class AddAuthenticateToPoll < ActiveRecord::Migration[6.0]
  def change
    add_column :polls, :authenticate, :boolean
  end
end
