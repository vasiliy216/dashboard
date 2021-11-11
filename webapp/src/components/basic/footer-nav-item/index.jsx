import './style.scss'

const FooterNavItem = props => {
    
    const {
        link,
        item
    } = props;

    return (
        <li className="footer-nav-item"><a href="#">{ item }</a></li>
    )
}

export default FooterNavItem