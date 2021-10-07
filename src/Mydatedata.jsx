import React ,{ useContext } from 'react'
import { myContextData } from './Advance';
import {FaCloudRain,FaCloud} from "react-icons/fa"
import {AiOutlineCloud} from "react-icons/ai"
import {WiDayCloudy} from "react-icons/wi"
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";






const Mydatedata = () => {
const {query}=useContext(myContextData);
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dayName1 = days[((new Date().getDay()+1))%7];
    var dayName2 = days[((new Date().getDay()+2))%7];
    var dayName3 = days[((new Date().getDay()+3))%7];
    var dayName4 = days[((new Date().getDay()+4))%7];
    var dayName5 = days[((new Date().getDay()+5))%7];

	return (
		<div className="days-div  justify-content-between">
		 <section>
            <p>{dayName1}</p>
            {() => {
           switch (query.list[0].weather[0].main) {
             case "Rain":   return <FaCloudRain/>;
             case "Clouds":   return <AiOutlineCloud/>;
             case "Clear":   return <WiDayCloudy/>;
             default :   return <FaCloud/>;
        }
      }}
            <p>{parseInt(query.list[4].main.temp)}°C</p>
        </section>
        <section >
            <p>{dayName2}</p>
            {() => {
           switch (query.list[0].weather[0].main) {
             case "Rain":   return <FaCloudRain />;
             case "Clouds":   return <AiOutlineCloud/>;
             case "Clear":   return <WiDayCloudy/>;
             default :   return <FaCloud/>;
        }
      }
	  
	  }
            <p>{parseInt(query.list[12].main.temp)}°C</p>
        </section>
        <section>
            <p>{dayName3}</p>
            {() => {
           switch (query.list[0].weather[0].main) {
             case "Rain":   return <FaCloudRain/>;
             case "Clouds":   return <AiOutlineCloud/>;
             case "Clear":   return <WiDayCloudy/>;
             default :   return <FaCloud/>;
        }
      }}
            <p>{parseInt(query.list[20].main.temp)}°C</p>
        </section>
        <section>
            <p>{dayName4}</p>
            {() => {
           switch (query.list[0].weather[0].main) {
             case "Rain":   return <FaCloudRain/>;
             case "Clouds":   return <AiOutlineCloud/>;
             case "Clear":   return <WiDayCloudy/>;
             default :   return <FaCloud/>; }
      }}
            <p>{parseInt(query.list[28].main.temp)}°C</p>
        </section>
        <section>
            <p>{dayName5}</p>
            {() => {
           switch (query.list[0].weather[0].main) {
             case "Rain":   return <FaCloudRain/>;
             case "Clouds":   return <AiOutlineCloud/>;
             case "Clear":   return <WiDayCloudy/>;
             default :   return <FaCloud/>;
        }
      }}
            <p>{parseInt(query.list[36].main.temp)}°C</p>
        </section>
		
			
		</div>
	)
}

export default Mydatedata
