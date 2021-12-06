import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { User } from '../../../redux/actions'
import { OpenNotification } from '../../../utils/helpers'

import { UserProfile as UserProfileBase } from '../../../pages/prepage'

const UserProfile = (props) => {

    const {
        user
    } = props

    return (
        <UserProfileBase
            user={user}
        />
    )
}

export default connect(({ user }) => ({ user: user.data }), User)(UserProfile)