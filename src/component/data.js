import { Contenedor,ContenedorCard, Div1, Div2 } from "./styled"

const Data = ({clima ,setClima}) =>{

  const removeCity = (id) =>{
    let prev = [];
    clima.map(clima =>{
      if(clima.id !== id){
        prev.push(clima)
      }
    })
    setClima(prev)
  }

  return(
      <ContenedorCard>
      {clima ? clima.map(clima =>
      <Contenedor>
        <button className="button" onClick={()=>removeCity(clima.id)}>X</button>
        <Div1>
          <div>
            <img className="imgClima" src={`animated/${clima.weather[0].main}.svg`} alt='imagen clima'/>
            <p className="description">{clima.weather[0].description.toUpperCase()}</p>
          </div>
          <div className="infoClima">
            <h2>{clima.name} <span>{clima.sys.country}</span></h2>
            <p>{Math.ceil(clima.main.temp - 273.15)}°</p>
          </div>
        </Div1>
        <Div2>
          <div className="contenidoClima">
            <img src="min.png"/>
            <p>{Math.ceil(clima.main.temp_min - 273.15)}°</p>
          </div>
          <div className="contenidoClima">
            <img src="max.png"/>
            <p>{Math.ceil(clima.main.temp_max - 273.15)}°</p>
          </div>
          <div className="contenidoClima">
            <img src="humedad.png"/>
            <p>{clima.main.humidity}%</p>
          </div>
          <div className="contenidoClima">
            <img src="viento.png"/>
            <p>{Math.ceil(clima.wind.speed * 3.6)} km/h</p>
          </div>
        </Div2>
      </Contenedor>)
      :null}
      </ContenedorCard>
  )
}

export default Data

{/* 
<Div1>
<div className="CityCountry">
<div>
<h2>{clima.name}</h2>
<h3>{clima.weather[0].description}</h3>
</div>
<h3>{clima.sys.country}</h3>
</div>
<div>
<div className="contenidoClima">
<img src="min.png"/>
<p>{Math.ceil(clima.main.temp_min - 273.15)}°</p>
</div>
<div className="contenidoClima">
<img src="max.png"/>
<p>{Math.ceil(clima.main.temp_max - 273.15)}°</p>
</div>
<div className="contenidoClima">
<img src="humedad.png"/>
<p>{clima.main.humidity}%</p>
</div>
<div className="contenidoClima">
<img src="viento.png"/>
<p>{Math.ceil(clima.wind.speed * 3.6)} km/h</p>
</div>
</div> 
</Div1>
<Div2>
<h2>{Math.ceil(clima.main.temp - 273.15)}°</h2>
<img src={`animated/${clima.weather[0].main}.svg`} alt='imagen clima'/>
</Div2>
*/}