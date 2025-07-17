import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import Infobox from "./infobox";
export default function Search({updateInfo}){
    let [city,setCity]=useState("");
    let [err,seterr]=useState(false);
    let handleValue=(event)=>{
        setCity(event.target.value);
    }
    let URL="https://api.openweathermap.org/data/2.5/weather";
    let API="0ea50905c850c82cdab9d6e473590dc9";
    let getWeather=async()=>{
        try{
            let response=await fetch(`${URL}?q=${city}&appid=${API}&units=metric`);
            let jsonres=await response.json();
            console.log(jsonres);
            let result={
                city:jsonres.name,
                temp:jsonres.main.temp,
                tempmax:jsonres.main.temp_max,
                tempmin:jsonres.main.temp_min,
                humidity:jsonres.main.humidity,
                feelslike:jsonres.main.feels_like,
                weather:jsonres.weather[0].description
            }
            return result;
        }catch(err){
            throw err;
        }
    }
    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let r=await getWeather();
            updateInfo(r);
            seterr(false);
        }catch(err){
            seterr(true);
        }
    }
    return(
        <div>
            {err && <p style={{color:"red"}}>"No such city in our DataBase...!"</p>}
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" onChange={handleValue} value={city} required/>
            <br></br><br></br>
            <Button variant="contained" type="submit" >Click</Button>
            </form>
            
        </div>
    )
}