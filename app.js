const weather = (id,text) =>{
    document.getElementById(id).innerText = text;
}

// event handler
const loadData = () =>{
    const cityText = document.getElementById('input-city');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityText.value}&units=metric&appid=f2ee70d18ef28772d882618e47cb421d`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if(data.cod === 404){
            
         return
        }
        displayWeather(data)})
}
loadData()



const displayWeather = temper => {
    weather('city', temper.name)
    weather('hot', temper.main.temp)
    weather('condition', temper.weather[0].main)
    const iconUrl = `https://openweathermap.org/img/wn/${temper.weather[0].icon}@2x.png`;
    const icon = document.getElementById('icon').setAttribute('src', iconUrl);
}