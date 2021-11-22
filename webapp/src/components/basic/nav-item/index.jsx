import { Link } from 'react-router-dom'
import classNames from 'classnames'
import './style.scss'

const NavItem = props => {

    const {
        link,
        navName,
        icon
    } = props;

    return (
        <li className="nav nav-item">
            <Link to={link} className={classNames({
                'nav nav-item-wrapper': true,
                'active': link === window.location.pathname.slice(1) ||
                    window.location.pathname.slice(1) === (link + "/edit") ||
                    (link === "blog-dashboard" && window.location.pathname === "/")
            })}>
                <i className={icon}></i>
                <span>{navName}</span>
            </Link>
        </li>
    )
}

export default NavItem