import React from 'react';
import {CalendarConfig} from '../constants/calendar';
const AddToCalendar = ({ title, description, location, startDate, endDate }) => {

    // Detect if the user is on Apple device
  const isAppleDevice = () => {
    console.log(navigator.userAgent)
    return /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent);
  };

  const handleAddToCalendar = () => {
    if (isAppleDevice()) {
      // For Apple devices, download .ics file
      CalendarConfig(title, description, location, startDate, endDate);
    } else {
      // For non-Apple devices, redirect to Google Calendar
      console.log("im not apple")
      const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&dates=${startDate}/${endDate}`;
      window.open(googleCalendarUrl, '_blank');
    }
  };

    return (
        <button className="add-calendar" onClick={handleAddToCalendar}>Añadir al calendario</button>
    )
}

export default AddToCalendar;