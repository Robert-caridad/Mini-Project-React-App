import './../ApartamentCard/ApartamentCard.css'
const ApartamentCard = ({ id, name, city, country, bedrooms, price, review_scores_rating, deleteApartament }) => {

    return (
        <div className="ApartamentCard">
            <h2>{name}</h2>
            <img src="" alt="" />
            <p>City: {city}</p>
            <p>Country: {country}</p>
            <p>Nº of bedrooms: {bedrooms}</p>
            <p>Price: {price}€</p>

            {
                review_scores_rating > 80 ? <p>Hight Score!!</p> : <p> Low Score D: </p>
            }

            <button onClick={() => deleteApartament(id)} className='btn-delete'>Delete</button>

        </div>
    )
}

export default ApartamentCard