import { useSelector } from "react-redux";
import './Errors.css'

const Errors = () => {
    const errors = useSelector(state => state.errors)
    console.log(errors)
    if(!errors || errors.length === 0) return null;

    return (
        <div className="errors">
            <ul>
                {errors && errors.map((error)=>{
                    return <li key={error}>{error}</li>
                })}
            </ul>
        </div>
    )
}

export default Errors;