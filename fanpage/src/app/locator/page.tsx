'use client'
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY!;
if (!googleApiKey) {
    throw new Error("Google API key is not defined in your environment.")
;}

const containerStyle = {
    width: '50%',
    height: '400px'
};

async function getLatLonforCity(city: string) {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(city + ', USA')}&key=${googleApiKey}`;
    const geocodeResponse = await fetch(geocodeUrl);
    const geocodeData = await geocodeResponse.json();
    const { lat, lng } = geocodeData.results[0].geometry.location;
    return { lat, lng };
}

async function getNearbyPlaces(lat: number, lng: number) {
    const radius = 1000;
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Olive+Garden&inputtype=textquery&locationbias=circle:${radius}@${lat},${lng}&key=${googleApiKey}`;
    console.log(url)
    try {
        const nearbyPlacesResponse = await fetch(url);
        if (!nearbyPlacesResponse.ok) {
            throw new Error('Network response was not ok.');
        }
        const nearbyPlacesData = await nearbyPlacesResponse.json();
        console.log(nearbyPlacesData);
        return nearbyPlacesData;
    } catch (error) {
        console.error('Error fetching nearby places:', error);
        throw error; // Rethrow the error to handle it at a higher level
    }
}

export default function Locator() {
    const [searchText, setSearchText] = useState<string>('');
    const [isLoading, setIsLoading] = useState(Boolean);
    const [mapCenter, setMapCenter] = useState({ lat:33.69383958039442, lng:-117.83629870284751});
    
    const inputRef = useRef<HTMLInputElement>(null)

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: googleApiKey,
    })

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!searchText) {
          return console.log('No search text?');
        }
        setIsLoading(true);
        try {
          const locationData = await getLatLonforCity(searchText);
          setMapCenter({ lat: locationData.lat, lng: locationData.lng });
          const nearbyLocations = await getNearbyPlaces(mapCenter.lat, mapCenter.lng); // Pass updated coordinates
          console.log('nearby locations', nearbyLocations);
        } catch (error) {
          console.error('Error fetching location data:', error);
        } finally {
          setSearchText('');
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }
        console.log('Submitted:', searchText);
      };      

    return (
        <>
            <div className='w-full h-auto flex flex-col item-center justify-center'>
                <form onSubmit={handleSubmit}>
                    <input
                        className='rounded-xl border-2 border-gray-400'
                        type="text"
                        required
                        ref={inputRef}
                        value={searchText}
                        onChange={(event) => setSearchText(event.target.value)}
                        placeholder="Enter your search"
                    />
                    <button
                        disabled={isLoading}
                        >
                        {isLoading ? 'Loading...' : 'Search'}
                    </button>
                </form>
            </div>
            <div className='w-full flex flex-col'>
                {isLoaded && (
                    <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={mapCenter}
                    zoom={14}
                    >

                    </GoogleMap>
                )}
            </div>
        </>
    );
}