import { Link, useParams } from "react-router-dom"
import { results } from './../../src/data/apartments.json'

const ItemDetailsPage = () => {

    const { id } = useParams()

    const selectedApartment = results.find(elm => elm.id == id)

    return (
        !selectedApartment
            ?
            <h1>{id} no existe</h1>
            :
            <div>
                <h1>{selectedApartment.name}</h1>
                <hr />
                <div className="tarjetaApartamento">
                    <p>Detalles: {selectedApartment.description}</p>
                    <p>Tipo: {selectedApartment.property_type}</p>
                    <p>Limpieza: {selectedApartment.cleaning_fee}</p>
                </div>
                <hr />

                <Link to={'/dashboardPage'}>Volver al listado de apartamentos</Link>
            </div>
    )
}

export default ItemDetailsPage