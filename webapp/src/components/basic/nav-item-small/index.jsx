import { Link } from 'react-router-dom'
import { Menu, Dropdown } from 'antd';

import './style.scss'

const NavItemSmall = props => {

    const {
        username
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
                <Link to="blog-post" className="dropdown-user-menu">
                    <i className="fas fa-th-large"></i>
                    <span>Blog Posts</span>
                </Link>

            </Menu.Item>
            <Menu.Item key="2">
                <Link to="add-new-post" className="dropdown-user-menu">
                    <i className="fas fa-folder-plus"></i>
                    <span>Add New Post</span>
                </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="4">
                <Link to="user-profile" className="dropdown-user-menu text-danger">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </Link>
            </Menu.Item>
        </Menu>
    );

    return (

        <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
            <li className="dropdown-nav-item__right">
                <div className="dropdown-toggle">
                    <img className="user-avatar" src="https://designrevision.com/demo/shards-dashboard-lite/images/avatars/0.jpg" alt="" />
                    <span className="user-name">{username}</span>
                </div>
            </li>
        </Dropdown>
    )
}

export default NavItemSmall