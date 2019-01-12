class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :commenttitle
      t.text :commentbody

      t.timestamps
    end
  end
end
