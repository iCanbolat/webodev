const key = '46b4fcc461868a8c3c0a3ecf4f2538e4';


const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    //Fetch Call yapıyoruz
    const response = await fetch(baseURL + query);

    //Dönen promise data 
    const data = await response.json();
    return data;

}
