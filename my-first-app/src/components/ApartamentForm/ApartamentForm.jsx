import { useState } from "react"
import "./ApartamentForm.css"
const ApartmentForm = ({ addNewApartament }) => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [bathrooms, setBathrooms] = useState(0)
    const [city, setCity] = useState("")
    const [review_scores_rating, setReview_scores_rating] = useState(0)

    const handleNameChange = event => {
        const { value } = event.target
        setName(value)
    }

    const handlePriceChange = event => {
        const { value } = event.target
        setPrice(value)
    }

    const handleBathroomsChange = event => {
        const { value } = event.target
        setBathrooms(value)
    }

    const handleCityChange = event => {
        const { value } = event.target
        setCity(value)
    }

    const handleReviewScoresRatingChange = event => {
        const { value } = event.target
        setReview_scores_rating(value)
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        const apartamentData = { name, price, bathrooms, city, review_scores_rating }
        addNewApartament(apartamentData)
    }



    return (
        <div className="apartamentForm">
            <form onSubmit={handleFormSubmit}>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
                Price:
                <input type="number" value={price} onChange={handlePriceChange} />
                Bathrooms:
                <input type="number" value={bathrooms} onChange={handleBathroomsChange} />
                City:
                <input type="text" value={city} onChange={handleCityChange} />
                Review scores rating:
                <input type="number" value={review_scores_rating} onChange={handleReviewScoresRatingChange} />
                <input type="submit" value={"New Apartament"} />
            </form>
        </div>
    )
}

export default ApartmentForm