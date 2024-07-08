import React, { useState } from 'react';
import './Reservation.css';

function Reservation() {
  const [numberOfHours, setNumberOfHours] = useState('');
  const [course, setCourse] = useState('');
  const [contactMethod, setContactMethod] = useState('');

  const handleNumberOfHoursChange = (e) => {
    setNumberOfHours(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleContactMethodChange = (e) => {
    setContactMethod(e.target.value);
  };

  return (
    <div className="reservation-container">
      <h2>Make a Reservation</h2>
      <div className="reservation-form">
        <div className="form-group">
          <label>Number of Hours</label>
          <input type="number" value={numberOfHours} onChange={handleNumberOfHoursChange} placeholder="Enter number of hours" />
        </div>
        <div className="form-group">
          <label>Course</label>
          <select value={course} onChange={handleCourseChange}>
            <option value="">Select Course</option>
            <option value="Course 1">Course 1</option>
            <option value="Course 2">Course 2</option>
          </select>
        </div>
        <div className="form-group">
          <label>Leave a Contact</label>
          <input type="text" value={contactMethod} onChange={handleContactMethodChange} placeholder="Enter your contact details" />
        </div>
        <button className="reservation-button">Submit Reservation</button>
      </div>
    </div>
  );
}

export default Reservation;
