'use client'
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";

const containerStyle = {
    width: '100%',
    height: '400px'
};

async function getLatLonforCity(city: string) {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        city + ', USA'
    )}&key=${process.env.GOOGLE_MAPS_PUBLIC_API_KEY!}`;
    const geocodeResponse = await fetch(geocodeUrl);
    const geocodeData = await geocodeResponse.json();
    const { lat, lng } = geocodeData.results[0].geometry.location;
    return { lon: lng, lat};
}

export type Place = {
    name: string;
    address: string;
    latitude: number;
    longitude: number;
};

export default function Locator() {
    const [searchText, setSearchText] = useState<string>('');
    const [isLoading, setIsLoading] = useState(Boolean);
    
    const inputRef = useRef<HTMLInputElement>(null)

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        if (inputRef.current === null) return
        console.log('Submitted:', searchText);
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    };

    return (
        
        <div className='w-full flex flex-wrap item-center justify-center'>
            <h1>Hello World!</h1>
            <form onSubmit={handleSubmit}>
                <input
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
            {isLoaded && (
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat:33.69383958039442, lng:-117.83629870284751}}
                zoom={13}
                >
                </GoogleMap>
            )}
        </div>
    );
}