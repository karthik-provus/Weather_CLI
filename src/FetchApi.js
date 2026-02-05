
// const API_KEY = "da50daf2a3dc45428f254704260502"
// const city = "Pune"

export const fetchWeatherData = async(uri, city, unit) => {
    let response = await fetch(`${uri}?key=${process.env.API_KEY}&q=${city}`)
    if(!response.ok){
        throw Error("Invalid Response")
    }
    let result = await response.json();
    return result;
}