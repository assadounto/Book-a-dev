class CreateDevelopers < ActiveRecord::Migration[7.0]
  def change
    create_table :developers do |t|
      t.string :name
      t.photo  :string
      t.string :email
      t.string :phone
      t.city   :string
      t.bio   :text
      t.github :string
      t.timestamps
    end
  end
end
