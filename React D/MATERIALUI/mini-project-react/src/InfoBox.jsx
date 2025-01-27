import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const InfoBox = ({ info }) => {
  const INIT_URL =
    "https://media.istockphoto.com/id/1759535600/photo/young-indian-women-freezing-shivering-outdoor-wearing-warm-winter-clothes-with-cap.webp?a=1&b=1&s=612x612&w=0&k=20&c=h7JYyQi3ETkhLyRS1lcSApnDSF_EibXaPoF5mr1eHkA=";

  const HOT_URL =
    "https://media.istockphoto.com/id/1410976365/photo/woman-suffering-from-heat-wave.webp?a=1&b=1&s=612x612&w=0&k=20&c=YUI_X0b649Wof5Hf5Px8lOsML4o4c4-NC16cfG5PdpA=";
  const COLD_URL =
    "https://images.unsplash.com/photo-1425100599170-85ec4f00a6ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL = "https://media.istockphoto.com/id/488302915/photo/sweet-girl-jumping-with-umbrella-in-autumnal-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=64hM2VW-rxnTn-djgsW3Bc_8_o62fRw6URSl4bPF86o=";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {
              info.humidity > 80
                ? <ThunderstormIcon/>
                : info.temp > 15
                ? <WbSunnyIcon/>
                : <AcUnitIcon/>
            }
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Himidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <b>{info.weather}</b> and feels
                like {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoBox;
