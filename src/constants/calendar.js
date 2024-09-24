const CalendarConfig = (title, description, location, startDate, endDate) => {
  //   const icsContent = `
  // BEGIN:VCALENDAR
  // VERSION:2.0
  // BEGIN:VEVENT
  // SUMMARY:${title}
  // DESCRIPTION:${description}
  // DTSTART:${startDate}
  // DTEND:${endDate}
  // LOCATION:${location}
  // END:VEVENT
  // END:VCALENDAR
  //   `;
    // const icsBase64 = btoa(icsContent);
    // const dataUri = `data:text/calendar;base64,${icsBase64}`;
    const calendarUrl = 'webcal://alvarostreicher.github.io/alejandroyluisa/assets/calendar/event.ics';
    const link = document.createElement('a');
    link.href = calendarUrl;
    // link.download = `${title}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const eventDetails = {
    title: 'Boda Gabriela & Alejandro',
    description: `
    Website: https://alvarostreicher.github.io/alejandroyluisa/
    Ceremonia Religiosa: https://maps.app.goo.gl/so1diDeUeixwgMY99?g_st=iw
    `,
    location: 'https://maps.app.goo.gl/5qjPm5FQKsHawfzj6?g_st=iw',
    startDate: '20241124T160000Z', // UTC format for Google Calendar
    endDate: '20241125T100000Z' // UTC format for Google Calendar
  };

  export  {CalendarConfig, eventDetails}