import React, { useEffect,useState } from 'react';
import { useWheater } from '../context/WheaterContex';
import '../App.css';
import WheaterDay from './WheaterDay';



function Api() {
  const {city, setCity} = useWheater()
  const [selectedCity,setSelectedCity]=useState("İstanbul")
  const cities = [
    "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir",
    "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır",
    "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay",
    "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli",
    "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu",
    "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa",
    "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın",
    "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
  ];

  const baseUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedCity}/next7days?unitGroup=metric&include=days&key=A7DJ2VZ86L5JYYLXU3KCFP97J&contentType=json`;

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json()) 
      .then((data) => setCity(data))
      .catch((error) => console.error('Error fetching data:', error));
      
  }, [setCity,baseUrl,selectedCity]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
        <div className='container'>
        <select value={selectedCity} onChange={handleCityChange}>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <br></br>
      <br></br>
      <div>
        {
          <WheaterDay city={city} />
        }
      </div>
    </div>
  );
}

export default Api;
