import './ApartmentsList.css'
import { results } from './../../data/apartments.json'
import { useState } from 'react'
import ApartmentCard from '../ApartmentCard/ApartmentCard'

const ApartmentsList = () => {

    const [apartments, setApartments] = useState(results)

    const removeApartment = apartmentId => {
        const filteredApartments = apartments.filter(elm => elm.id != apartmentId)
        setApartments(filteredApartments)
    }

    return (
        <div className="ApartmentsList">
            <h1>Listado de aptos</h1>
            <hr />
            {
                apartments.map(elm => {
                    return <ApartmentCard key={elm.id} {...elm} removeApartment={removeApartment} />
                })
            }
        </div>
    )
}

export default ApartmentsList