import { useState } from 'react'
import ApartamentsData from './../../Data/ApartamentsData.json'
import ApartamentCard from '../ApartamentCard/ApartamentCard'

const ApartamentsList = () => {

    const [apartaments, setApartaments] = useState(ApartamentsData.results)

    const removeApartament = apartamentToDelete => {
        const filteredApartament = apartaments.filter(eachApartament => eachApartament.id != apartamentToDelete)
        setApartaments(filteredApartament)
    }

    return (
        <div className="ApartamentsList">

            <h1>Apartamentos</h1>

            {
                apartaments.map(eachApartament => {
                    return (
                        <ApartamentCard key={eachApartament.id} {...eachApartament} deleteApartament={removeApartament} />
                    )
                })
            }

        </div>
    )
}

export default ApartamentsList