simplyCountdown('#cuenta', {
    year: 2024,
    month: 4,
    day: 25,
    hours: 0,
    minutes: 0,
    seconds: 10,
    words:{ 
        days: 'dia',
        hours: 'hora',
        minutes: 'minuto',
        seconds: 'segundo',
        pluralLetter: 's'
    },
    plural: true,
    inline: false,
    inlineClass: 'simply-countdown-inline',
    enableUtc: true,
    onend: function() {return;},
    refresh: 1000,
    sectionClass: 'simply-section',
    amountClass: 'simply-amount',
    wordClass:'simply-word',
    zeroPad: false,
    countUp: false,

});
let myElement = document.querySelector('.my-countdow');
simplyCountdown(myElement, {});

let multipleElements = document.querySelectorAll('.my-countdow');
simplyCountdown(multipleElements, {});