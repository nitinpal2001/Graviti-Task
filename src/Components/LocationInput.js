import React,{useContext} from 'react'
import '../Styles/locationinput.css'
import LocationIcon from '../Assets/locationIcon.svg'
import LoadingContext from './LoadingContext'

// For autocompleting feature in the input field
import { Autocomplete } from '@react-google-maps/api';

export default function LocationInput({label,OriginRef,DestRef}) {
     const { isLoaded } = useContext(LoadingContext);
    return (
        <div className='locationinput'>
            <p>{label}</p>
            <div className="locationinput__input">
                <img src={LocationIcon} alt="" />
                <Autocomplete>
                <input type="text" placeholder={`${label==="Origin"?"Origin":"Destination"}`} ref={label==="Origin"?OriginRef:DestRef}/>
                </Autocomplete>
            </div>
        </div>
    )
}
