import { useEffect } from 'react'
import { NavItem } from '../../basic'
import { useNavigate } from 'react-router-dom'

import './style.scss'

const Menu = (props) => {

    const {
        user
    } = props

    const navigate = useNavigate();

    useEffect(() => {

    }, [navigate])

    return (
        <div className="main-sidebar">
            <div className="main-sidebar__logo">
                <div className="navbar-brand">
                    {/* <img className="main-logo" src="" alt="" /> */}
                    <i className="fas fa-clipboard-list main-logo"></i>
                    <span className="main-name-logo">Shards Dashboard</span>
                </div>
            </div>
            <div className="main-sidebar__wrapper">
                <ul className="nav-wrapper">
                    <NavItem
                        link='blog-dashboard'
                        icon='fas fa-pencil-alt'
                    >
                        Blog Dashboard
                    </NavItem>
                    <NavItem
                        link='blog-post'
                        icon='fas fa-th-large'
                    >
                        Blog Posts
                    </NavItem>
                    <NavItem
                        link='add-new-post'
                        icon='fas fa-folder-plus'
                    >
                        Add New Post
                    </NavItem>
                    <NavItem
                        link='tables'
                        icon='fas fa-table'
                    >
                        Tables
                    </NavItem>
                    <NavItem
                        link={(user.link || user._id) + ''}
                        icon='fas fa-user'
                    >
                        User Account
                    </NavItem>
                </ul>
            </div>
        </div>
    )
}

export default Menu