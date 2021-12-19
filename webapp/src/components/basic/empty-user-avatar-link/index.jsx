import { Link } from 'react-router-dom'
import { UserAvatar } from '../'

const EmptyUserAvatarLink = ({ image }) => {

    if (image) {
        return (
            <Link to="*"
                className="blog-post__author-avatar"
                style={{ backgroundImage: 'url(' + image + ')' }}
            ></Link>
        )
    } else {
        return (
            <Link to="*">
                <UserAvatar />
            </Link>
        )
    }

}

export default EmptyUserAvatarLink