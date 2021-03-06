import { NavItemSmall, Notification } from '../../basic'

import './style.scss';

const Header = (props) => {

    const {
        user,
        UserLogout
    } = props

    return (
        <div className="main-navbar">
            <nav className="navbar">
                <form className="main-navbar__search">
                    <div className="input-group">
                        <div className="input-group-icon">
                            <i className="fas fa-search"></i>
                        </div>
                        <input className="navbar-search" type="text" placeholder="Search for something..." />
                    </div>
                </form>
                <ul className="navbar-nav">
                    <Notification />
                    <NavItemSmall
                        UserLogout={UserLogout}
                        userName={user.user_name }
                        userAvatar={user.avatar}
                    />
                </ul>
            </nav>
        </div>
    )
}

export default Header