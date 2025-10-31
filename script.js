function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  // Custom values for bottom digits (can be replaced with temperature, countdown, etc.)
  const tempC = Math.floor(20 + Math.random() * 10); // Range: 20–30°C
  const tempF = Math.round((tempC * 9) / 5 + 32); // Convert to Fahrenheit

  document.getElementById("ampm").textContent = `${hour % 12 || 12} ${
    hour >= 12 ? "PM" : "AM"
  }`;
  document.getElementById("minute").textContent = String(minute).padStart(
    2,
    "0"
  );
  document.getElementById("second").textContent = String(second).padStart(
    2,
    "0"
  );
  document.getElementById("custom1").textContent = tempC; // Celsius
  document.getElementById("custom2").textContent = tempF; // Fahrenheit
}

setInterval(updateClock, 1000);
updateClock();
