function timeTillDoomsDay(){

	var endTime = new Date (2016,10,8,19,0,0,0);
	var now = new Date ();
	var endTimeStamp = Date.parse(endTime);
	var nowTimeStamp = Date.parse(now);
	var timeDifference = endTimeStamp - nowTimeStamp;
	
	var timeStampInSeconds = timeDifference / 1000;

	var seconds = Math.floor(timeStampInSeconds % 60);
	var minutes = Math.floor((timeStampInSeconds / 60) % 60);
	var hours = Math.floor(timeStampInSeconds / (60 * 60) % 24);
	var days = Math.floor(timeStampInSeconds / (60 * 60 * 24) % 7);
	var weeks = Math.floor(timeStampInSeconds / (60 * 60 * 24 * 7));


	// var seconds = Math.floor((timeDifference / 1000) % 60);
	// var minutes = Math.floor((timeDifference / 1000 / 60) % 60);
	// var hours = Math.floor((timeDifference / 1000 * 60 * 60) % 24);
	// var days = Math.floor((timeDifference / 1000 * 60 * 60 * 24) % 7);
	// var weeks = Math.floor((timeDifference / 1000 * 60 * 60 * 24 * 7);
	// console.log(seconds);

	var timeObject = {
		weeks: weeks,
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: seconds

	};

	return timeObject;

};

function initTimer() {

	var timer = document.getElementById('countdown-wrapper');
	var weeks = document.getElementById('weeks');
	var days = document.getElementById('days');
	var hours = document.getElementById('hours');
	var minutes = document.getElementById('minutes');
	var seconds = document.getElementById('seconds');

	// var weeks = timer.querySelector(' #weeks');
	var timeObjectedReturned = timeTillDoomsDay();
	console.log(timeObjectedReturned);
};

function updateTimer() {

};

initTimer();