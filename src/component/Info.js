import React from 'react'

export default function Info({dataweather}) {
    return (
        <div style={dataweather?{display: "block"}: {display:'none'}}>
             <h2 className='city'>
     {dataweather.name}
        </h2>
        <div ><strong>country  :</strong>{dataweather.sys.country}</div>

          <div ><strong>weather  : </strong> {dataweather.weather[0].description}</div>
        <div ><strong>temperature:</strong> {((dataweather.main.temp - 273.15).toFixed(2)) }°C</div>
        <div ><strong> humidity:  </strong>{dataweather.main.humidity}%</div>
        <div > <strong>wind speed : </strong>{dataweather.wind.speed} km/h</div> 
        </div>
    )
}
