
export const fetchWeatherData = async(uri, city, unit) => {
    let response = await fetch(`${uri}?key=${process.env.API_KEY}&q=${city}`)
    if (!response.ok) {
        console.log(`API Error: HTTP ${response.status}`);
    }
    const result = await response.json();
    if (result.error) {
        throw new Error(result.error.message);
    }

    return result;
}