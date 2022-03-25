
const getData = async (city) =>{
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1bc1223dda27de1f88d25346ffa70689`)
    const data = await result.json()
    return data
}

export default getData