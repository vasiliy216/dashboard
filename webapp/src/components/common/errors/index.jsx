import { useNavigate } from 'react-router-dom'

import './style.scss'

const Errors = () => {

    const navigate = useNavigate();

    return (
        <div className="error">
            <div className="error__content">
                <h2>404</h2>
                <h3>Page not found!</h3>
                <p>Please get back to work!</p>
                <button className="error-button" onClick={() => navigate(-1)}>← Go Back</button>
            </div>
        </div>
    )
}

export default Errors