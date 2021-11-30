import { Link } from 'react-router-dom'
import { UserAvatar } from '../'
import { Menu, Dropdown } from 'antd';

import './style.scss'

const NavItemSmall = props => {

    const {
        userName,
        userAvatar,
        UserLogout
    } = props;

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <Link to="user-profile" className="dropdown-user-menu">
                    <i className="fas fa-user"></i>
                    <span>User Profile</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to="user-profile/edit" className="dropdown-user-menu">
                    <i className="fas fa-cog"></i>
                    <span>Edit User Profile</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="blog-post" className="dropdown-user-menu">
                    <i className="fas fa-th-large"></i>
                    <span>Blog Posts</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="add-new-post" className="dropdown-user-menu">
                    <i className="fas fa-folder-plus"></i>
                    <span>Add New Post</span>
                </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="4">
                <Link to="user-profile" onClick={UserLogout} className="dropdown-user-menu text-danger">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </Link>
            </Menu.Item>
        </Menu>
    );

    return (

        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
            <li className="dropdown-nav-item__right">
                <div className="dropdown-toggle">
                    <UserAvatar userAvatar={userAvatar} />
                    <span className="user-name">{userName}</span>
                </div>
            </li>
        </Dropdown>
    )
}

export default NavItemSmall