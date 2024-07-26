import './ApartmentsList.css'
import ApartmentCard from '../ApartmentCard/ApartmentCard'


const ApartmentsList = ({ removeApartment, apartments }) => {

    return (
        <div className="ApartmentsList">
            {
                apartments.map(elm => {
                    return (

                        <ApartmentCard key={elm.id}{...elm} removeApartment={removeApartment} />

                    )
                })
            }
        </div>
    )
}

export default ApartmentsList