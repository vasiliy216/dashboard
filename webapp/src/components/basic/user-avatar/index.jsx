import './style.scss'

const UserAvatar = ({ userAvatar }) => {

    if (userAvatar) {
        return (
            <img className="user-avatar" src={userAvatar.url || userAvatar} alt={userAvatar.filename} />
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