function countdown() {
    // Get the current date and time
    const now = new Date();
  
    // Set the target date and time for tomorrow at 4 PM
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() ); // Move to tomorrow
    tomorrow.setHours(9, 59, 0, 0); // Set time to 4 PM (hours, minutes, seconds, milliseconds)
  
    // Calculate the time difference in milliseconds
    const timeDiff = tomorrow.getTime() - now.getTime();
  
    // Convert milliseconds to days, hours, minutes, and seconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
    // Format the time components with leading zeros (optional)
    const formattedDays = days ? `${days.toString().padStart(2, '0')}` : '00';
    const formattedHours = hours ? `${hours.toString().padStart(2, '0')}` : '00';
    const formattedMinutes = minutes ? `${minutes.toString().padStart(2, '0')}` : '00';
    const formattedSeconds = seconds ? `${seconds.toString().padStart(2, '0')}` : '00';
  
    // Update the countdown display
    const countdownDisplay = document.getElementById('cuenta');
    countdownDisplay.textContent = `${formattedDays}d ${formattedHours}h ${formattedMinutes}m ${formattedSeconds}s`;
  
    // Schedule the next countdown update
    setTimeout(countdown, 1000); // Update every second
  
    // Check if 10 minutes are left before the end (optional)
    if (timeDiff <= 10 * 60 * 1000) {
      // Show the countdown on portada (replace with your actual logic)
      document.getElementById('portada').classList.remove('oculta');
    }
    
  }
  
  // Get the countdown display element
  const countdownDisplay = document.getElementById('cuenta');
  
  // Start the countdown
  countdown();
  
  // Daily Reset at 4 PM
  function resetCountdown() {
    // Reset the target date and time for tomorrow at 4 PM
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(16, 0, 0, 0);
  
    // Reset the countdown display (optional)
    countdownDisplay.textContent = '';
  
    // Restart the countdown
    countdown();
  }
  
  setInterval(resetCountdown, 1000 * 60 * 60 * 24); // Execute every 24 hours
  