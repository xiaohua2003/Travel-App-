const geoNameURL = 'http://api.geonames.org/searchJSON?q='
const WeatherApiKey="5de31e011adb4940aa5b958726f603e1";
const weatherCurrentURL="https://api.weatherbit.io/v2.0/current?";
const weatherForcastURL ="https://api.weatherbit.io/v2.0/forecast/daily?";
const pixabayURL="https://pixabay.com/api/?key=";
const pixabayKey="20352608-22d8f6eb6de07cb69c22283c7";


function handleSubmit(e){
    event.preventDefault()
    const fromPlace=document.getElementById("from_place").value;
    const toPlace=document.getElementById("to_place").value;
    const travelDate=document.getElementById("travel_date").value;
    const url=`${geoNameURL}${toPlace}&maxRows=10&username=xiaohua`;

    let diff_day = function (date1) {
        let dt1 = new Date(date1);
        let dt2 = new Date();
        return Math.floor((Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) - Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate())) / (1000 * 60 * 60 * 24));
        }
    const daysAway=diff_day(document.getElementById("travel_date").value);
  

    getGeoData(url)
    .then(function(GeoData){
        const toLat=GeoData.geonames[0].lat;
        const toLng=GeoData.geonames[0].lng;
        console.log(toLat);
        console.log(toLng);
         //Getting Weather data
         return getWeatherData(toLat, toLng, travel_date);
    })
   .then((weatherData) => {
        //store weather data
       const temperature=weatherData.data[0].temp;
       const  weatherCondition=weatherData.data[0].weather.description;
        console.log(temperature);
        console.log(weatherCondition);
        return getImage(toPlace)
         .then((cityImage)=>{
            //store city image
            if (cityImage.hits.length>0){
                const imageURL=cityImage.hits[0].webformatURL;
                console.log(imageURL);
            //Sending data to server to store all information.
           return postData('/add', {from: fromPlace, to: toPlace, date:travelDate, days_away:daysAway, image:imageURL,temp:temperature, condition:weatherCondition} )
           
    }}).then((data)=>{
        updateUI(data)});
        })
    //.then(updateUI(data));
    
}

//function to get geo data
const getGeoData=async(URL)=>{
    const res=await fetch(URL);
    try{
        const data=await res.json();
        console.log(data)
        return data;
    }catch(error){
        console.log("error",error);
    }
};

//function to get weather data
async function getWeatherData(toLat, toLng, date) {

    // Getting the timestamp for the current date and traveling date for upcoming processing.
    const tripDate=Math.floor(new Date(date).getTime() / 1000);
    const todayDate=new Date();
    const timestamp_today=Math.floor(new Date(todayDate.getFullYear() + '-' + todayDate.getMonth() + '-' + todayDate.getDate()).getTime() / 1000);
    let response;
    //determining whether tripDate is within one week(7*24*60*60)
    if ((tripDate-timestamp_today) < 604800) {
        response=await fetch (weatherCurrentUR+"lat="+toLat+"&lon="+toLng+"&key="+WeatherApiKey);
       
    } else {
        response=await fetch(weatherForcastURL+"lat="+toLat+"&lon="+toLng+"&key="+WeatherApiKey);
    }
    try {
        const weatherData=await response.json();
        console.log(weatherData);
        return weatherData;
    } catch (error) {
        console.log('error', error)
    }
}
//function to get city image
async function getImage(toPlace) {
    const response = await fetch(pixabayURL+pixabayKey+"&q="+toPlace+" city&image_type=photo");
    try {
        const cityImage=await response.json();
        console.log(cityImage);
        return cityImage;
    } catch (error) {
        console.log('error', error);
    }
}
//function to post data
  async function postData(url, data) {
    console.log(data)
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),        
  })
  try {
    const ProjectData = await response.json();
    console.log(ProjectData);
    return ProjectData;
  }catch(error) {
  console.log("error", error);
  }
};

//update UI elements
const updateUI=async()=>{
    const request=await fetch('/all');
    try{
      const projectData = await request.json();
      console.log(projectData);
      const trip_information=document.getElementById("trip_information")
      trip_information.classList.remove('invisible');
      trip_information.scrollIntoView({behavior: "smooth"});
      document.getElementById("boarding").innerHTML=projectData.from;
      document.getElementById("destination").innerHTML=projectData.to;
      document.getElementById("departing_date").innerHTML=projectData.date;
      document.getElementById("days_away").innerHTML=projectData.days_away;
      if (projectData.image !== undefined) {
          document.getElementById("destination_image").setAttribute('src', projectData.image);
      }
  
      document.getElementById("temperature").innerHTML=projectData.temp;
      document.getElementById("weather_condition").innerHTML=projectData.condition;
      
}
catch(error){
        console.log("error", error);
      }
    
}

//the day diffecence


export { handleSubmit  }


  