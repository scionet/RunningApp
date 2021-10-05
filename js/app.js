"use strict"; 
// Dom7
var $ = Dom7;

// Init App
var app = new Framework7({
  root: '#app',
  theme: 'md',
  routes: routes,
  view : {
	pushState: true
  }
});

function weightHistoryChart(){
	var ctx = document.getElementById("weight-history");
	var weightHistory = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
			datasets: [{
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255,99,132,1)',
				data: ["56", "62", "60", "66", "70", "78", "70", "72", "75", "70"],
				label: 'Weight History/Kg',
				fill: 'origin'
			}]
		}
	});
}

function caloriesBurnedChart(){
	var ctx = document.getElementById("calories-burned");
	var weightHistory = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["20", "21", "23", "24", "25", "26", "27", "28", "29", "30"],
			datasets: [{
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				data: ["2", "2.5", "1.5", "3", "2.2", "1.2", "2.8", "2", "1.5", "2"],
				label: 'K.Calories Burned - Last 30 days',
				fill: 'origin'
			}]
		}
	});
}

function caloriesBurnedChart(){
	var ctx = document.getElementById("calories-burned");
	var weightHistory = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["20", "21", "23", "24", "25", "26", "27", "28", "29", "30"],
			datasets: [{
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				data: ["2", "2.5", "1.5", "3", "2.2", "1.2", "2.8", "2", "1.5", "2"],
				label: 'K.Calories Burned - Last 30 days',
				fill: 'origin'
			}]
		}
	});
}

function exercicesHistoryChart(){
	var ctx = document.getElementById("exercices-history");
	var weightHistory = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["20", "21", "23", "24", "25", "26", "27", "28", "29", "30"],
			datasets: [{
				backgroundColor: 'rgba(255, 206, 86, 0.2)',
				borderColor: 'rgba(255, 206, 86, 1)',
				data: ["10", "21", "15", "15", "13", "22", "14", "15", "13", "12"],
				label: 'Number of exercices - Last 30 days',
				fill: 'origin'
			}]
		}
	});
}