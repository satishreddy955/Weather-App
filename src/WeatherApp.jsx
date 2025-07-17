import { useState } from "react";
import Search from "./Search";
import Infobox from "./infobox";
import "./style.css";
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
        city:"",
        feelslike:0,
        temp:0,
        tempmin:0,
        tempmax:0,
        humidity:0,
        weather:"haze",
    });
    let Hot="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=TrdzfkrLvvrvp5CWEqh5C2DNS13jrgLo849g6T583So=";
    let cold="https://plus.unsplash.com/premium_photo-1671643642938-ea7b23ad4d8f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rain="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return(
        <div className="out" style={{backgroundImage:`url(${weatherInfo.humidity>80?rain :(weatherInfo.temp>15 ?Hot:cold)})`,color:`${weatherInfo.humidity>80?"white" :(weatherInfo.temp>15 ?"black":"blue")}`}}>
            <h1>Weather Updates</h1>
            <Search updateInfo={updateInfo}/>
            { weatherInfo.city!="" ?
                <>
                    
                    <Infobox info={weatherInfo}/>
                </>
                :<h1 style={{color:"red"}}></h1>
            }
        </div>
    );
}