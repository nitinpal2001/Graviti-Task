import React,{useRef,useState} from 'react'
import '../Styles/distancecalc.css'
import DistanceOutput from './DistanceOutput'
import Map from './Map'
import LocationInput from './LocationInput'

export default function distancecalc() {
    const [directionResponse, setDirectionResponse] = useState(null);
    const [distance, setDistance] = useState("")

    const originRef = useRef();
    const destinationRef = useRef();

    // Function For calculating Route on Map
    const calculateRoute= async()=> {
        if(originRef.current.value ==='' || destinationRef.current.value === ''){
            alert("Please enter both origin and destination")
        }
        else{
            //eslint-disable-next-line no-undef
            const directionsService = new google.maps.DirectionsService();
            const results = await directionsService.route({
                origin: originRef.current.value,
                destination: destinationRef.current.value,
                //eslint-disable-next-line no-undef
                travelMode: google.maps.TravelMode.DRIVING
            });
            setDirectionResponse(results);
            setDistance(results.routes[0].legs[0].distance.text)
    }
        console.log('clicked')
}

    return (
        <div className='distancecalc'>
            <h3>Let's calculate <strong>distance</strong> from Google maps</h3>
            <div className="distancecalc__container">
                <div className="distancecalc__container__left">
                    <div>
                        <div>
                            <LocationInput label="Origin" OriginRef={originRef}/>
                            <LocationInput label="Destination" DestRef={destinationRef}/>
                        </div>
                        <button type='submit' onClick={calculateRoute}>Calculate</button>
                    </div>
                    <DistanceOutput distance={distance} />
                </div>
                <div className="distancecalc__container__right">
                <Map directionResponse={directionResponse}/>
                </div>
            </div>


        </div>
    )
}
