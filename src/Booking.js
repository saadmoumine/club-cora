import React, { useState } from 'react';
import './Booking.css';

function Booking() {
  const [course, setCourse] = useState('');
  const [instructor, setInstructor] = useState('');
  const [date, setDate] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [price, setPrice] = useState(0);

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleInstructorChange = (e) => {
    setInstructor(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeFromChange = (e) => {
    setTimeFrom(e.target.value);
  };

  const handleTimeToChange = (e) => {
    setTimeTo(e.target.value);
  };

  const handleCalculatePrice = () => {
    // Assuming a fixed rate of $20/hr for simplicity
    const rate = 20;
    const hours = new Date(`1970-01-01T${timeTo}:00`).getHours() - new Date(`1970-01-01T${timeFrom}:00`).getHours();
    setPrice(hours * rate);
  };

  return (
    <div className="booking-container">
      <h2>Book Individual Lessons</h2>
      <div className="booking-form">
        <div className="form-group">
          <label>Choose Your Course</label>
          <input type="text" value={course} onChange={handleCourseChange} placeholder="Enter course name" />
        </div>
        <div className="form-group">
          <label>Instructor</label>
          <select value={instructor} onChange={handleInstructorChange}>
            <option value="">Select Instructor</option>
            <option value="Instructor 1">Instructor 1</option>
            <option value="Instructor 2">Instructor 2</option>
          </select>
        </div>
        <div className="form-group">
          <label>Choose Your Time</label>
          <input type="date" value={date} onChange={handleDateChange} />
          <input type="time" value={timeFrom} onChange={handleTimeFromChange} />
          <input type="time" value={timeTo} onChange={handleTimeToChange} />
        </div>
        <div className="form-group">
          <label>Price</label>
          <span className="price">{price} $</span>
        </div>
        <button className="calculate-button" onClick={handleCalculatePrice}>Calculate Price</button>
      </div>
    </div>
  );
}

export default Booking;
