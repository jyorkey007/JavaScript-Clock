// start of clock code
      var timer;

      function update() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours
        document.getElementById('hour').innerHTML = hours;

        var minutes = date.getMinutes();
        if (minutes < 10) minutes = '0' + minutes
        document.getElementById('min').innerHTML = minutes;

        var seconds = date.getSeconds();
        if (seconds < 10) seconds = '0' + seconds
        document.getElementById('sec').innerHTML = seconds;
      }

       function startClock() {
        if (timer) return
        timer = setInterval(update, 1000);
        update();
        document.getElementById('colon').innerHTML = ':';
        document.getElementById('colon2').innerHTML = ':';
      }

      function stopClock() {
        clearInterval(timer);
        timer = null;
      }