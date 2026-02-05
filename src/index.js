#!/usr/bin/env node

import { Command } from 'commander';
import { fetchWeatherData } from './FetchApi.js';
import { forecastSummary } from './Charts/index.js';
import { generateHourlyChart } from './Charts/useChart.js';
import dotenv from 'dotenv';
import { withErrorHandling } from './Utility/ErrorHandling.js';
dotenv.config({quiet:true}); // quiet true silents the logs
const program  = new Command();

const weather_api = process.env.WEATHER_API;

program.name("Weather_CLI").description("CLI Tool to get the Weather Data.").version("1.0.0")

// current command
program
.command('current')
.description('Get temperature in Celcius/Fahrenheit')
.argument("<City>", "Name of the city")
.option("-f, --fahrenheit", "Fetch temperature in Fahrenheit")
.action(
    withErrorHandling(async(CityName, options) => {
    let unit = 'c';
    if(options.fahrenheit){
        unit = 'f';
    }
    let result = await fetchWeatherData(`${weather_api}/current.json`, CityName, unit);
    console.log(`The Temperature at Pune is ${unit=='c'?result.current.temp_c: result.current.temp_f} °${unit.toUpperCase()}`);
}))


// chart command
program
.command("chart")
.description("Visualize the Weather Forecast")
.argument("<City>", "Name of the city.")
.option("-s, --forecastSummary", "Summary of your forecast")
.option("-f, --Fahrenheit", "Summary in terms of Fahrenheit")
.option("-T, --hourlyForecast", "Hourly Forecast of the day")
.action(
    withErrorHandling(async(CityName, options) => {
    let unit = 'c';
    if(options.Fahrenheit){
        unit = 'f';
    }

    let weatherForecast = await fetchWeatherData(`${weather_api}/forecast.json`, CityName, unit);
    if(options.forecastSummary){
        forecastSummary(weatherForecast, unit);
    }

    if(options.hourlyForecast){
        generateHourlyChart(weatherForecast, unit);
    }
}))

program.parse()
