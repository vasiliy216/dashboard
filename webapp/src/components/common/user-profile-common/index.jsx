import { Link } from 'react-router-dom'
import { UserAvatar, UserBackgroundPhoto } from '../../basic'
import { UserSocial, UserData, UserTags } from '../../basic/user-profile-basic'
import './style.scss'

const UserProfileCommon = (props) => {

    const {
        user_name,
        email,
        location,
        phone_number,
        avatar,
        bio,
        tags,
        social,
        background_photo
    } = props

    return (
        <div className="user-profile">
            <div className="card-mrg-all">
                <div className="user-profile-header">
                    <div className="user-details__img">
                        <UserBackgroundPhoto image={background_photo} />
                    </div>
                </div>
                <div className="user-profile-body">
                    <div className="user-details__avatar">
                        <UserAvatar userAvatar={avatar} />
                    </div>
                    {user_name && <h4 className="user-details__name">{user_name}</h4>}
                    {bio && <p className="user-details__description text-white">{bio}</p>}
                    <UserSocial social={social} />
                    <UserData
                        email={email}
                        location={location}
                        phone_number={phone_number}
                    />
                    <UserTags tags={tags} />
                </div>
            </div>
        </div>
    )
}

export default UserProfileCommon