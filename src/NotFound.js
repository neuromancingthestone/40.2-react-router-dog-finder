import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <Link to="/dogs">Go Back</Link>              
        </div>
    )
}