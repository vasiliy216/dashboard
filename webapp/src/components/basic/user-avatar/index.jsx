import './style.scss'

const UserAvatar = ({ userAvatar }) => {

    if (userAvatar) {
        return (
            <img className="user-avatar" src="https://designrevision.com/demo/shards-dashboard-lite/images/avatars/0.jpg" alt="" />
        )
    } else {
        return (
            <div className="empty-avatar user-avatar">
                <i className="fas fa-camera"></i>
            </div>
        )
    }
}

export default UserAvatar