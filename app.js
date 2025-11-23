const apikey="2b2a89c586303beecc7129bf80b48a41";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let inputCity=document.querySelector("#search input");
let btn=document.querySelector("#search button");
let WIcon=document.querySelector(".weatherImg");

async function checkWeather(city){
    try{
    const res=await fetch(apiurl+city+`&appid=${apikey}`);

    if(res.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
         
    }
    else{

    var data=await res.json();

    console.log(data);

document.querySelector(".city").innerHTML= data.name;
document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ "°C";
document.querySelector(".Humidity").innerHTML= data.main.humidity+" %";
document.querySelector(".Wind").innerHTML= data.wind.speed+" km/h";

if(data.weather[0].main=="Clear"){
   WIcon.src="images/clear.png";
}
else if(data.weather[0].main=="Clouds"){
   WIcon.src="images/clouds.png";
}
else if(data.weather[0].main=="Drizzle"){
    WIcon.src="images/drizzle.png";
}
else if(data.weather[0].main=="Mist"){
    WIcon.src="images/mist.png";
}
else if(data.weather[0].main=="Rain"){
    WIcon.src="images/rain.png";
}
else if(data.weather[0].main=="Snow"){
    WIcon.src="images/snow.png";
}
  document.querySelector(".weather").style.display="block";
  document.querySelector(".error").style.display="none";
  
}
    }
catch(err){
    console.log("Invalid City Name",err);
}
}


btn.addEventListener("click",()=>{
    checkWeather(inputCity.value);
});



