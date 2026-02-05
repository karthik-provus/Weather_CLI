import { drawBarChart } from "./todayForecast.js"


export const forecastSummary = async(weatherForecast, unit) => {

    if(unit=='c'){
        const maxTemp_c = weatherForecast.forecast.forecastday[0].day.maxtemp_c
        const minTemp_c = weatherForecast.forecast.forecastday[0].day.mintemp_c
        const avgTemp_c = weatherForecast.forecast.forecastday[0].day.avgtemp_c
        drawBarChart(maxTemp_c, minTemp_c, avgTemp_c, 'c');
    }
    else{
        const maxTemp_f = weatherForecast.forecast.forecastday[0].day.maxtemp_f
        const minTemp_f = weatherForecast.forecast.forecastday[0].day.mintemp_f
        const avgTemp_f = weatherForecast.forecast.forecastday[0].day.avgtemp_f
        drawBarChart(maxTemp_f, minTemp_f, avgTemp_f, 'f');
    }
       
    
}