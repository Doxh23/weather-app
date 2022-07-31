import React,{useState} from 'react'; 
import Form from './component/Form';
import axios from 'axios'
import Error from './component/Error';
import Info from  './component/Info'
function App() {
  const [dataweather, setdataweather] = useState({});
  const [datacity, setdatacity] = useState()
console.log(dataweather)
async function modifycity(e) {
  if (e.key === "Enter"){
    setdataweather({})
   axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${datacity}&appid=${process.env.REACT_APP_API_KEY}`)
   .then(res => setdataweather(res.data))
  }
}


  return (
    <>
        
    <div className="weather">
    <Form setdatacity={setdatacity} modifycity={modifycity} />
    {
       (typeof dataweather.main != "undefined")? (<Info dataweather={dataweather} />) : (<Error dataweather={dataweather} />)
    }
    </div>
    </>
  );
}

export default App;
