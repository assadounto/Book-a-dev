import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBookings } from "../redux/bookings";
import { fetchDevelopers } from "../redux/developer";
function Bookings() {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.bookings);
  const developers = useSelector((state) => state.developers.developers);
  useEffect(() => {
    dispatch(fetchBookings());
    dispatch(fetchDevelopers());
  }, []);
  console.log(developers);
  console.log(bookings);
  const displayBookings =
    bookings.length !== 0 ? (
      bookings.map((booking) => (
        <div key={booking.id}>
          <p>{booking.city}</p>
          <p>{booking.date}</p>
          <p>{booking.time}</p>

          {developers.map(
            (developer) =>
              developer.id === booking.developer_id && (
                <p>For developer: {developer.name}</p>
              )
          )}
          <button
            className="btn btn-danger"
            onClick={(e) => {
              e.preventDefault();
              fetch(`api/v1/bookings/${booking.id}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              });
              dispatch(fetchBookings());
            }}
          >
            Cancel Booking
          </button>
        </div>
      ))
    ) : (
      <div>
        <p>No bookings</p>
      </div>
    );

  return (
    <div>
      Bookings
      {displayBookings}
    </div>
  );
}

export default Bookings;
