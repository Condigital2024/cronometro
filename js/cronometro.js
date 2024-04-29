function countdown() {
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setHours(10, 16, 0, 0);
    if (now >= tomorrow){
        tomorrow.setDate(tomorrow.getDate() + 1);
    }
    const timeDiff = tomorrow.getTime() - now.getTime();
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    const formattedHours = hours ? `${hours.toString().padStart(2, '0')}` : '00';
    const formattedMinutes = minutes ? `${minutes.toString().padStart(2, '0')}` : '00';
    const formattedSeconds = seconds ? `${seconds.toString().padStart(2, '0')}` : '00';
    const countdownDisplay = document.getElementById('cuenta');
    countdownDisplay.textContent = ` ${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
    setTimeout(countdown, 1000); 
    const isLessthan10Minutes = timeDiff < ( 1000 *60 * 60 * 20);
    if (isLessthan10Minutes) {
        document.getElementById('tempo').classList.remove('oculta');
    } else {
        document.getElementById('tempo').style.display = 'none';
  }
  }
  const countdownDisplay = document.getElementById('tempo');
  countdown();
  function resetCountdown() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() );
    tomorrow.setHours(16, 0, 0, 0);
    countdownDisplay.textContent = '';
    countdown();
  }
  