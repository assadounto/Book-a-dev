class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
    t.date :date
    t.time :time
    t.city :string
    t.references :developer, null: false, foreign_key: true
    t.references :user, null: false, foreign_key: true
    t.timestamps
    end
  end
end
