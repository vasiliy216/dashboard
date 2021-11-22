import { Link } from 'react-router-dom'
import './style.scss'

const UserProfileCommon = () => {


    return (
        <div className="user-profile">
            <div className="card-mrg-all">
                <div className="user-profile-header">
                    <div className="user-details__img">
                        <img src="https://designrevision.com/demo/shards-dashboards/images/user-profile/up-user-details-background.jpg" alt="" />
                    </div>
                </div>
                <div className="user-profile-body">
                    <div className="user-details__avatar">
                        <img src="https://designrevision.com/demo/shards-dashboards/images/avatars/0.jpg" alt="" />
                    </div>
                    <h4 className="user-details__name">Sierra Brooks</h4>
                    <p className="user-details__description text-white">I'm a design focused engineer.</p>
                    <ul className="user-details__social">
                        <li><Link to=""><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link to=""><i className="fab fa-twitter"></i></Link></li>
                        <li><Link to=""><i className="fab fa-github"></i></Link></li>
                        <li><Link to=""><i className="fab fa-vk"></i></Link></li>
                    </ul>
                    <div className="user-details__data">
                        <div className="user-details__data-wrapper">
                            <div className="user-text__data">
                                <span>Email</span>
                                <span>sierra@example.com</span>
                            </div>
                            <div className="user-text__data">
                                <span>Location</span>
                                <span>Remote</span>
                            </div>
                        </div>
                        <div className="user-details__data-wrapper">
                            <div className="user-text__data">
                                <span>Phone</span>
                                <span>+40 1234 567 890</span>
                            </div>
                            <div className="user-text__data">
                                <span>Account Number</span>
                                <span>123456789</span>
                            </div>
                        </div>
                    </div>
                    <div className="user-details__tags">
                        <span className="user-tag text-white">USER EXPERIENCE</span>
                        <span className="user-tag text-white">UI DESIGN</span>
                        <span className="user-tag text-white">REACT JS</span>
                        <span className="user-tag text-white">HTML & CSS</span>
                        <span className="user-tag text-white">JAVASCRIPT</span>
                        <span className="user-tag text-white">BOOTSTRAP 4</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileCommon