var form = document.querySelector('.js-form');
var content = document.querySelector('.content');

async function getWeather(name) {
	
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=00b06d48633e2a7986718231ec14a7e4`, {mode: 'cors'})
	.then(function(response) {
		return response.json();
	})
	.then(function(response) {
		const weather = response.name;
		content.innerHTML = `<p>Weather: ${response.weather[0].description} <br> Temperature: ${response.main.temp}</p>` ;
		console.log(response.weather[0].description);
		console.log(response.main.temp);
	})
	.catch(function(error) {
		console.log(error);
	});

	
}

form.addEventListener('submit', event => {
	event.preventDefault();
	const input = document.querySelector('.js-form-input');
	getWeather(input.value.trim());
});

