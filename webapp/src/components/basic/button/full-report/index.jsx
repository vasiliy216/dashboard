import { Link } from 'react-router-dom'
import './style.scss'

const FullReport = props => {


    return (
        <div className="device-footer-href">
            <Link to="" className="device-footer-button">{props.children}</Link>
        </div>
    )
}

export default FullReport