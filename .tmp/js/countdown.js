(function() {
  var secondsToString;

  $(function() {
    var countdownEl, oDate, updateTime, weddingDate;
    countdownEl = $('.countdown');
    weddingDate = countdownEl.data('date');
    oDate = new Date(Date.parse(weddingDate));
    return (updateTime = function() {
      var deltaDate, timeAway, today;
      today = new Date();
      deltaDate = oDate - today;
      timeAway = secondsToString(deltaDate / 1000);
      countdownEl.html("FINAL COUNTDOWN: " + timeAway.days + " days " + timeAway.hours + " hours " + timeAway.minutes + " minutes " + timeAway.seconds + " seconds");
      return setTimeout(updateTime, 500);
    })();
  });

  secondsToString = function(seconds) {
    return {
      days: Math.floor(seconds / 86400),
      hours: Math.floor((seconds % 86400) / 3600),
      minutes: Math.floor(((seconds % 86400) % 3600) / 60),
      seconds: Math.floor(((seconds % 86400) % 3600) % 60)
    };
  };

}).call(this);
