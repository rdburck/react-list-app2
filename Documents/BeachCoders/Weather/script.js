$(document).ready(() => {
    $('#searchForm').submit(function(e) { 
        e.preventDefault();
        console.log('search form is working');
        let city = $('#searchText').val();
        console.log(city);
        let myKey = 'f7bcc7d88d2c43b2be34a8fc9f0d76ba';
        
            $.ajax({
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${myKey}`,
                type: 'GET',
                dataType: 'jsonp',
                success:function(data){
                    console.log(data);
    
                    $('#weather').html(
                    `<h2 class="text-center">${data.name}, ${data.sys.country}</h2>
                    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" height="200" width="200">
                    <h3 class="text-center">${data.main.temp}°F</h4>
                    <h4 class="text-center">Feels like: ${data.main.feels_like}°F</h3>
                    <h3 class="text-center">Humidity:${data.main.humidity}%</h3>
                    <h3 class="text-center">High: ${data.main.temp_max}°F Low: ${data.main.temp_min}°F</h3>
                    <!--<h3 class="text-center">${data.weather[0].main}</h3>-->
                    <h3 class="text-center">${data.weather[0].description}</h3>
                    `)   
                }
            })
        
    })
})