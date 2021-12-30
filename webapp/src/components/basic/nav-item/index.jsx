import { Link } from 'react-router-dom'
import classNames from 'classnames'
import './style.scss'

const NavItem = props => {

    const {
        link,
        icon
    } = props;

    const currentLink = link === window.location.pathname.slice(1)
    const isDashboard = link === "blog-dashboard" && window.location.pathname === "/"

    return (
        <li className="nav nav-item">
            <Link to={link} className={classNames({
                'nav nav-item-wrapper': true,
                'active': currentLink || isDashboard
            })}>
                <i className={icon}></i>
                <span>{props.children}</span>
            </Link>
        </li>
    )
}

export default NavItem