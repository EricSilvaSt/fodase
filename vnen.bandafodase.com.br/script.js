document.addEventListener('DOMContentLoaded', function () {
    var hoursElement = document.getElementById('hours');
    var minutesElement = document.getElementById('minutes');
    var secondsElement = document.getElementById('seconds');

    function updateCountdown() {
        var targetTime = new Date();
        targetTime.setHours(targetTime.getHours() + 24); // Define a hora alvo para 24 horas a partir de agora

        var countdownInterval = setInterval(function() {
            var currentTime = new Date();
            var timeDifference = targetTime - currentTime;

            if (timeDifference <= 0) {
                clearInterval(countdownInterval);
                window.location.href = 'sua-pagina-pronta.html';
            } else {
                var hours = Math.floor(timeDifference / (1000 * 60 * 60));
                var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                hoursElement.textContent = padNumber(hours);
                minutesElement.textContent = padNumber(minutes);
                secondsElement.textContent = padNumber(seconds);
            }
        }, 1000);
    }

    function padNumber(number) {
        return (number < 10 ? '0' : '') + number;
    }

    updateCountdown();
});
