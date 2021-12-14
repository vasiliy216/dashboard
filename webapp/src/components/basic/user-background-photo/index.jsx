import './style.scss'

const UserBackgroundPhoto = ({ image }) => {
    if(image) {
        return (
            <img className='user-background-photo' src={image.url} alt={image.filename} />
        )
    } else {
        return (
            <div className="empty-avatar user-background">
                <i className="fas fa-image"></i>
            </div>
        )
    }
}

export default UserBackgroundPhoto