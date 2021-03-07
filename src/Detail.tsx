import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box from '@material-ui/core/Box';


const Detail = (props:any) => {
  const imageArray = {
    hamburger: 'https://f.easyuploader.app/eu-prd/upload/20210307163305_4b744851.png',
    lemonadeStand: 'https://f.easyuploader.app/eu-prd/upload/20210307003919_51545971.png',
    etfStocks: 'https://f.easyuploader.app/eu-prd/upload/20210307163306_54566c69.png',
    etfBonds: 'https://f.easyuploader.app/eu-prd/upload/20210307163306_54566c69.png',
    iceCreamTruck: 'https://f.easyuploader.app/eu-prd/upload/20210307163359_4a4e444b.png',
    house: 'https://f.easyuploader.app/eu-prd/upload/20210307163405_75765456.png',
    townhouse: 'https://f.easyuploader.app/eu-prd/upload/20210307003925_466b6f46.png',
    mansion:'https://f.easyuploader.app/eu-prd/upload/20210307163437_38725745.png',
    industrialSpace: 'https://f.easyuploader.app/eu-prd/upload/20210307163312_32336d53.png',
    hotelSkyscraper: 'https://f.easyuploader.app/eu-prd/upload/20210307003919_72627653.png',
    skyRailway: 'https://f.easyuploader.app/eu-prd/upload/20210307163359_77476136.png',
  };

  const location:any = useLocation();
  const index = location.state;
  const goods = props.assetArray[index];
  const image = imageArray[goods.id];


  return (
    <Box>
      <img alt="image" src={image}  width="250" height="200"/>
    </Box>
  )
}

export default Detail
