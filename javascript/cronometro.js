simplyCoundown('[CSS-SELECTOR]', {
    year: 2024,
    month: 4,
    day: 31,
    hours: 0,
    minutes: 0,
    seconds: 0,
    words:{ 
        days: 'dia',
        hours: 'hora',
        minutes: 'minute',
        seconds: 'second',
        pluralLetter: 's'
    },
    plural: true,
    inline: false,
    inlineClass: 'simply-coundown-inline',
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
simplyCoundown(myElement, {});

let multipleElements = document.querySelectorAll('.my-countdow');
simplyCoundown(multipleElements, {});