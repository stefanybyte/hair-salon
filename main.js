// Get today's day
const daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  
  const hoursOfWeek = {
    "Sunday": "10:00 am - 5:00 pm",
    "Monday": "10:00 am – 8:00 pm",
    "Tuesday": "10:00 am - 8:00pm",
    "Wednesday": "10:00 am - 8:00pm",
    "Thursday": "10:00 am - 8:00pm",
    "Friday": "10:00 am - 5:00pm",
    "Saturday": "10:00 am - 5:00pm"
  };
  
  // Set today's hours in the a href
  const today = new Date();
  const todayName = daysOfWeek[today.getDay()];
  const todayHours = document.getElementById('todayHours');
  todayHours.textContent = `Open today: ${hoursOfWeek[todayName]}`;
  
  // Toggle all hours when clicked
  todayHours.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent page jump
    const allHours = document.getElementById('allHours');
    if (allHours.style.display === "none" || allHours.style.display === "") {
      allHours.style.display = "block";
    } else {
      allHours.style.display = "none";
    }
  });
  