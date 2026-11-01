function updateDateTime() {
  const now = new Date();
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('date-display').textContent = now.toLocaleDateString(undefined, dateOptions);
  document.getElementById('time-display').textContent = now.toLocaleTimeString();
}

updateDateTime();
setInterval(updateDateTime, 1000);