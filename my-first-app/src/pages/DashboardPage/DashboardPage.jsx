import ApartmentForm from "../../components/ApartamentForm/ApartamentForm"
import ApartmentsList from "../../components/ApartmentsList/ApartmentsList"
import { useState } from "react"
import { results } from './../../data/apartments.json'

const DashboardPage = () => {

    const [apartments, setApartments] = useState(results)

    const removeApartment = apartmentId => {
        const filteredApartments = apartments.filter(elm => elm.id != apartmentId)
        setApartments(filteredApartments)
    }

    const addNewApartament = newAparment => {
        const fullApartament = [newAparment, ...apartments]
        setApartments(fullApartament)
    }

    return (
        <div className="DashboardPage">
            <h1>Panel principal</h1>
            <hr />
            <ApartmentForm addNewApartament={addNewApartament} />
            <br />
            <hr />
            <ApartmentsList removeApartment={removeApartment} apartments={apartments} />
        </div>
    )
}

export default DashboardPage