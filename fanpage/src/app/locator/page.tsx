'use client'
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY!;
if (!googleApiKey) {
    throw new Error("Google API key is not defined in your environment.")
;}

const containerStyle = {
    width: '100%',
    height: '1080px'
};

async function getLatLonforCity(city: string) {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        city + ', USA'
    )}&key=${googleApiKey}`;
    const geocodeResponse = await fetch(geocodeUrl);
    const geocodeData = await geocodeResponse.json();
    const { lat, lng } = geocodeData.results[0].geometry.location;
    return { lon: lng, lat};
}

export default function Locator() {
    const [searchText, setSearchText] = useState<string>('');
    const [isLoading, setIsLoading] = useState(Boolean);
    
    const inputRef = useRef<HTMLInputElement>(null)

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: googleApiKey,
    })

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!searchText) {
            return console.log('No search text?')
        }
        setIsLoading(true);

        try {
            const locationData = await getLatLonforCity(searchText);
            console.log(locationData);
        } catch (error) {
            console.error('Error fetching location data:', error);
        } finally {
            setIsLoading(false);
            setSearchText('');
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
        if (inputRef.current === null) return
        console.log('Submitted:', searchText);
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    };

    return (
        <>
            <div className='w-full flex flex-col item-center justify-center'>
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
            </div>
            <div>
                {isLoaded && (
                    <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{ lat:33.69383958039442, lng:-117.83629870284751}}
                    zoom={14}
                    >
                    </GoogleMap>
                )}
            </div>
        </>
    );
}