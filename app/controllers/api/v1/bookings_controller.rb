class Api::V1::BookingsController < ApplicationController
  def index
    @bookings = Booking.all
    render json: @bookings
  end

  def create
    booking = Booking.new(booking_params)
    booking.user_id = current_user.id
    if booking.save
      render json: booking
    else
      render json: { error: booking.errors.messages }, status: 422
    end
  end

  def destroy
    booking = Booking.find(params[:id])
    booking.destroy
    render json: { status: "Booking was successfully destroyed." }, status: 200
  end

  private

  def booking_params
    params.require(:booking).permit(:date, :time, :city, :developer_id)
  end
end
