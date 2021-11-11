import { Menu, Dropdown } from 'antd';

import './style.scss'

const Notification = () => {

    const menu = (
        <Menu>
            <Menu.Item key="0">
                <div className="notification-dropdawn-item">
                    <div className="notification__icon-wrapper">
                        <div className="notification__icon">
                            <i className="fas fa-chart-line"></i>
                        </div>
                    </div>
                    <div className="notification__content">
                        <div className="notification__category">
                            <span>Analytics</span>
                            <p>Your website’s active users count increased by <span className="text-success">28%</span> in the last week. Great job!</p>
                        </div>
                    </div>
                </div>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1">
                <div className="notification-dropdawn-item">
                    <div className="notification__icon-wrapper">
                        <div className="notification__icon">
                            <i class="fas fa-store-alt"></i>
                        </div>
                    </div>
                    <div className="notification__content">
                        <div className="notification__category">
                            <span>SALES</span>
                            <p>Last week your store’s sales count decreased by <span className="text-danger">5.52%</span>. It could have been worse!</p>
                        </div>
                    </div>
                </div>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2">
                <div className="notification-dropdawn-item">
                    <a className="notification__all">
                        View all Notifications
                    </a>
                </div>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']} overlayClassName="notification-ant-fix" placement="bottomRight">
            <li className="dropdown-nav-item__left">
                <div className="nav-icon__wrapper">
                    <i className="fas fa-bell"></i>
                    <span className="badge-danger">2</span>
                </div>
            </li>
        </Dropdown>
    )
}

export default Notification