import { FooterNavItem } from '../../basic'

import './style.scss'

const Footer = props => {
    
    const footer = [{
        link: 'blog-dashboard',
        item: 'Home',
    },{
        link: 'blog-dashboard',
        item: 'Services',
    },{
        link: 'blog-dashboard',
        item: 'About',
    },{
        link: 'blog-dashboard',
        item: 'Products',
    },{
        link: 'blog-dashboard',
        item: 'Blog',
    }]

    return (
        <div className="main-footer">
            <ul className="footer-nav">
                {footer.map((item, index) => {
                    return (
                        <FooterNavItem {...item} key={index} />
                    )
                })}
            </ul>
            <span className="copyright">
                Copyright © 2021 <a href="#">DesignRevision</a>
            </span>
        </div>
    )
}

export default Footer