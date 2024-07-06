import React, { useState } from 'react';
import './BookingHotel.css';

const BookingHotel = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: '',
    roomType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    console.log(formData);
  };

  return (
    <div className="form-body">
      <div className="container formularioo">
        <form onSubmit={handleSubmit}>
          <h1>Booking Hotel Room</h1>
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="input-box">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="input-box">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="input-box">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Your Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="input-box check-date">
                <label htmlFor="checkInDate">Check-in Date</label>
                <input
                  type="date"
                  id="checkInDate"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="input-box check-date">
                <label htmlFor="checkOutDate">Check-Out Date</label>
                <input
                  type="date"
                  id="checkOutDate"
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="input-box">
                <input
                  type="number"
                  name="numberOfGuests"
                  placeholder="Number of Guests"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="input-box">
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Room Type</option>
                  <option value="Non AC Standard Room">Non AC Standard Room</option>
                  <option value="Superior Room">Superior Room</option>
                  <option value="Family Room">Family Room</option>
                </select>
              </div>
            </div>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookingHotel;
