// import React ,{useEffect,useState} from 'react';
// // import axios from 'axios';
//  import './App.css';


// const Weather = () => {
// 	const [city,setCity] = useState();
// 	const [search,setSearch] = useState("thana bhawan");
// 	//   
//     useEffect(()=>{
// 		const fetchApi =async ()=>{
// 	const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f65537065b1659ec8fdc99e3d73bf124`);
// 			const resJson=await  data.json()
// 			 console.log(resJson.main);
// 			setCity(resJson.main);

// 		};
// 		fetchApi();
// 	},[search]);


// 	const inputData=(event)=>{
// 		 setSearch(event.target.value);

		
// 	}
// 	// const onSubmit=(event)=>{
// 	// 	setSearch(event.target.value);

// 	// }

      



// 	return (
// 		<>
// 		<div className="center_div">
// 			<input type="search"  onChange={inputData} placeholder="Search here...."></input>
// 			{/* <button onClick={onSubmit}>search</button> */}
			

// 			<p className="font ">{search}</p>
			
// 		{!city ? (<p>data not found</p>):(
// 		<div className="font">	
// 		<p>temp : {city.temp} </p>
// 		<p>temp : feels-like :  {city.feels_like}</p>
// 		<p>temp-min :{city.temp_min}</p>
// 		<p>temp-max :{city.temp_max}</p>
// 		<p>humidity : {city.humidity}</p>
// 		</div>
//              )
// 			}
// 			</div>

// 		{/* <p>{search}</p>
// 		{!city ? (<p>data not found</p>):(
// 		<div>	
// 		<p>temp : {city.temp} </p>
// 		<p>temp : feels-like :  {city.feels_like}</p>
// 		<p>temp-min :{city.temp_min}</p>
// 		<p>temp-max :{city.temp_max}</p>
// 		<p>humidity : {city.humidity}</p>
// 		</div>
//              )
// 			} */}
		
		


		

			
// 		</>
// 	)
// }

// export default Weather;
