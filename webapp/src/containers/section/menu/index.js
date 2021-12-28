import { connect } from 'react-redux'
import { User } from '../../../redux/actions'
import { Menu as MenuBase } from '../../../components/section'

const Menu = (props) => {

    const {
        user
    } = props

    return (
        <MenuBase 
            user={user}
        />
    )
}

export default connect(({ user }) => ({
    user: user.data
}), User)(Menu)