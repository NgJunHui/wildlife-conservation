import React from 'react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlinePhone } from 'react-icons/hi';
import ClipLoader from "react-spinners/ClipLoader";

const GoogleMaps = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAN4GW1uuwJoVIRiPTitr2yvKPrTznGIlQ"
  })

  if (!isLoaded) return (
    <div className='api-spinners'>
      <ClipLoader
        color={'#395144'}
        loading={true}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>);
  return (
    <div className='googlemap-container'>
      <p>Operating Hours: <span>9 a.m to 5 p.m DAILY</span></p>
      <Map />
    </div>
  )
}

const Map = () => {
  return <GoogleMap
    zoom={19}
    center={{ lat: 1.29415, lng: 103.85294 }}
    mapContainerClassName="map-container">
    <MarkerF position={{ lat: 1.29415, lng: 103.85294 }} />
  </GoogleMap>
}

export default GoogleMaps