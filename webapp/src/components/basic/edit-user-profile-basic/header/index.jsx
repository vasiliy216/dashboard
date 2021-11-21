import './style.scss'

const Header = () => {


    return (
        <div className="edit-user-profile__header">
            <div className="edit-user-details__img">
                <img src="https://designrevision.com/demo/shards-dashboards/images/user-profile/up-user-details-background.jpg" alt="" />
                <label className="edit-user-details__change-background">
                    <i className="fas fa-camera"></i> Change Background Photo <input type="file" />
                </label>
            </div>
        </div>
    )
}

export default Header