class CreateJoinTablePostsComments < ActiveRecord::Migration[5.2]
  def change
    create_join_table :users, :posts do |t|

    end
  end
end
