import { useEffect } from 'react'
import { connect } from 'react-redux'
import { User } from '../../../redux/actions'

import { Header as HeaderBase } from '../../../components/section'

const Header = (props) => {
    
    const {
        user,
        fetchUserLogout
    } = props;

    const UserLogout = () => {
        fetchUserLogout();
    }

    useEffect(() => {

    }, [user])

    return (
        <HeaderBase 
            user={user}
            UserLogout={UserLogout}
        />
    )
}

export default connect(({user}) => ({
    user: user.data
}), User)(Header)