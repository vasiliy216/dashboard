import { useEffect } from 'react'
import { NavItem } from '../../basic'
import { useNavigate } from 'react-router-dom'

import './style.scss'

const Menu = (props) => {

    const {
        user
    } = props

    const menu = [{
        link: 'blog-dashboard',
        navName: 'Blog Dashboard',
        icon: 'fas fa-pencil-alt'
    }, {
        link: 'blog-post',
        navName: 'Blog Posts',
        icon: 'fas fa-th-large'
    }, {
        link: 'add-new-post',
        navName: 'Add New Post',
        icon: 'fas fa-folder-plus'
    }, {
        link: 'tables',
        navName: 'Tables',
        icon: 'fas fa-table'
    }, {
        link: 'user-profile',
        navName: 'User Account',
        icon: 'fas fa-user'
    }]

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
                    {/* {menu.map((item, index) => {
                        return (
                            <NavItem {...item}
                                key={index}
                            />
                        )
                    })} */}
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
                        link={user.link || user._id}
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