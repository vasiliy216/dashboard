import { Link } from 'react-router-dom'
import './style.scss'

const FooterNavItem = props => {
    
    const {
        // link,
        item
    } = props;

    return (
        <li className="footer-nav-item"><Link to="">{ item }</Link></li>
    )
}

export default FooterNavItem