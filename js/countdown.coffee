$ ->
	countdownEl = $('.countdown')
	weddingDate = countdownEl.data('date')

	oDate = new Date(Date.parse(weddingDate))

	do updateTime = ->
		today = new Date()
		deltaDate = oDate - today
		timeAway = secondsToString(deltaDate / 1000)
		countdownEl.html("FINAL COUNTDOWN: #{timeAway.days} days #{timeAway.hours} hours #{timeAway.minutes} minutes #{timeAway.seconds} seconds")
		setTimeout updateTime, 500

secondsToString = (seconds) ->
		days: Math.floor(seconds / 86400)
		hours: Math.floor((seconds % 86400) / 3600)
		minutes: Math.floor(((seconds % 86400) % 3600) / 60)
		seconds: Math.floor(((seconds % 86400) % 3600) % 60)

