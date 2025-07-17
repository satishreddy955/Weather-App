import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./style.css"
export default function Infobox({info}){
    return(
        <div className="infobox">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="span">
                    {info.city} {
                    info.humidity>80?
                    <ThunderstormIcon/>:(info.temp>15 ?
                    <WbSunnyIcon />
                    :<AcUnitIcon/>)
                    }
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <div> Temperature : {info.temp}&deg;C</div>
                    <div> Maximum Temperature : {info.tempmax}&deg;C</div>
                    <div> Minimum Temperature : {info.tempmin}&deg;C</div>
                    <div> Humidity : {info.humidity}</div>
                    <div> The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C</div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </div>      
    )
}