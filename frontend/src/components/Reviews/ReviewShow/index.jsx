import './ReviewShow.css'
import { ReactComponent as CloseIcon } from '../../../assets/svg/Close.svg'

const ReviewShow = ({review, author, onClose}) => {
    return (
        <div className="review-show">
            <CloseIcon className="close-icon" onClick={onClose}/>
            <h1>{author}</h1>
            <p className="min-chars review-show-body">{review.body}</p>
            <div className="review-form-footer">
                <button className="review-show-button" onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default ReviewShow;