import React from 'react';
import Images from '../AllAssets';
import '../App.css';

const listConditions=[
    "Clear",
    "Rain, Partially cloudy",
    "Partially cloudy",
    "Overcast Snow",
    "Rain",
    "Overcast"
]
function getIcon(condition) {
    switch (condition) {
      case listConditions[0]:
        return Images.clear;
      case listConditions[1]:
      case listConditions[4]:
        return Images.rain;
      case listConditions[2]:
      case listConditions[5]:
        return Images.Cloud;
      case listConditions[3]:
        return Images.snow;
      default:
        return Images.defaultIcon;
    }
  }

 


function WheaterDay({city}) {
  return (
    <div>
         <div className="container">
          <div style={{backgroundColor:"aqua"}} >
          <h2>Pazartesi</h2>
            <div>
            {city.days && city.days.length > 0 ? (
            <img src={getIcon(city.days[0].conditions)} alt="Weather Icon" />) : (<img src={Images.Cloud} alt="Default Icon" />)}
            <h3> Max Temp: {(city.days && JSON.stringify(city.days[0].tempmax, null, 2))}</h3>
            <h3> Min Temp: {(city.days && JSON.stringify(city.days[0].tempmin, null, 2))}</h3>

        </div>
          </div>
          <div style={{backgroundColor:"aqua"}} >
          <h2>Salı</h2>
            <div>
          {city.days && city.days.length > 0 && (
            <img src={getIcon(city.days[1].conditions)} alt="Weather Icon" />
          )}
         <h3> Max Temp: {(city.days && JSON.stringify(city.days[0].tempmax, null, 2))}</h3>
         <h3> Min Temp: {(city.days && JSON.stringify(city.days[0].tempmin, null, 2))}</h3>

        </div>
          </div>
          <div style={{backgroundColor:"aqua"}} >
          <h2>Çarşamba</h2>
            <div>
          {city.days && city.days.length > 0 && (
            <img src={getIcon(city.days[2].conditions)} alt="Weather Icon" />
          )}
         <h3> Max Temp: {(city.days && JSON.stringify(city.days[0].tempmax, null, 2))}</h3>
         <h3> Min Temp: {(city.days && JSON.stringify(city.days[0].tempmin, null, 2))}</h3>

        </div>
          </div>
          <div style={{backgroundColor:"aqua"}} >
          <h2>Perşembe</h2>
            <div>
          {city.days && city.days.length > 0 && (
            <img src={getIcon(city.days[3].conditions)} alt="Weather Icon" />
          )}
         <h3> Max Temp: {(city.days && JSON.stringify(city.days[0].tempmax, null, 2))}</h3>
         <h3> Min Temp: {(city.days && JSON.stringify(city.days[0].tempmin, null, 2))}</h3>

        </div>
          </div>
          <div style={{backgroundColor:"aqua"}} >
          <h2>Cuma</h2>
            <div>
          {city.days && city.days.length > 0 && (
            <img src={getIcon(city.days[4].conditions)} alt="Weather Icon" />
          )}
         <h3> Max Temp: {(city.days && JSON.stringify(city.days[0].tempmax, null, 2))}</h3>
         <h3> Min Temp: {(city.days && JSON.stringify(city.days[0].tempmin, null, 2))}</h3>

        </div>
          </div>
          <div style={{backgroundColor:"aqua"}} >
          <h2>Cumartesi</h2>
            <div>
          {city.days && city.days.length > 0 && (
            <img src={getIcon(city.days[5].conditions)} alt="Weather Icon" />
          )}
         <h3> Max Temp: {(city.days && JSON.stringify(city.days[0].tempmax, null, 2))}</h3>
         <h3> Min Temp: {(city.days && JSON.stringify(city.days[0].tempmin, null, 2))}</h3>

        </div>
          </div>
          <div style={{backgroundColor:"aqua"}} >
          <h2>Pazar</h2>
            <div>
          {city.days && city.days.length > 0 && (
            <img src={getIcon(city.days[6].conditions)} alt="Weather Icon" />
          )}
         <h3> Max Temp: {(city.days && JSON.stringify(city.days[0].tempmax, null, 2))}</h3>
         <h3> Min Temp: {(city.days && JSON.stringify(city.days[0].tempmin, null, 2))}</h3>

        </div>
          </div>
      </div>

       
     
      
      </div>
  )
}

export default WheaterDay