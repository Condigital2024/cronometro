simplyCountdown('#cuenta', {
    year: 2024,
    month: 4,
    day: 25,
    hours: 14,
    minutes: 32,
    seconds: 0,
    words:{ 

        days: 'Dia',
		hours: 'Hora',
		minutes: 'Minuto',
		seconds: 'Segundo',
		pluralLetter: 's'
    },
    plural: true,
    inline: false,
    inlineClass: 'simply-countdown-inline',
    enableUtc: false,
    onEnd: function() {
		document.getElementById('portada').classList.add('oculta');
		return; 
	},
    refresh: 1000,
    sectionClass: 'simply-section',
    amountClass: 'simply-amount',
    wordClass:'simply-word',
    zeroPad: false,
    countUp: false

});

