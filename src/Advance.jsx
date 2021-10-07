import React ,{createContext, useEffect,useState} from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Mydatedata from './Mydatedata';


const myContextData=createContext();

const Advance = () => {
	const [city, setCity] = useState("")
	const [search, setSearch] = useState("shamli")
	const [query, setQuery] = useState(null)
	
    useEffect(()=>{
		const fetchApi=async()=>{
       try{
		const res=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=f65537065b1659ec8fdc99e3d73bf124`);
		// const resJson=await res.json();
		const data=await res.json();
		console.log(data.list[0].weather[0].main);
		setQuery(data)
	       }catch(err){
		   console.log(err);
	      }
		}
		fetchApi()
	},[search]);


	const getData=(event)=>{
       setCity(event.target.value);

	}
 const handleSubmit=(e)=>{
	 e.preventDefault();
	 setSearch(city);
	 setCity("");

 }




	return (
		<>
		<div className="container-fluid cc_div">
		<div className="row">
		<h1 className="text-white head_div">weather App</h1>
			<div className="col-lg-12 col-md-12 col-sm-12 col-12">
			<div className="text-white">
			<form onSubmit={handleSubmit}>
		<input type="search" onChange={getData} />
		<button>search</button>
		</form>
		{!query ? (
			<p>No data found</p>
			)
		  :
		  (
			  <div>
			<p className="searching">{search},{query.city.country}</p> 
			<div>
		{query ? <h1 className="text-black">{query.list[0].weather[0].main}</h1> :" " } 
		{query ? <h1 className="text-black">{parseInt(query.list[0].main.temp)}°C</h1> :" "}
		</div>
		</div>

		  )
		  }
		  {query ? <myContextData.Provider value={{query}}> <Mydatedata /></myContextData.Provider> : ""}
		  </div>
			</div>
		</div>
		
		

	   </div>
		
		</>
	)
}

export default Advance
export {myContextData};
