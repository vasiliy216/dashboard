import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { User } from '../../../redux/actions'
import { OpenNotification } from '../../../utils/helpers'

import { UserProfile as UserProfileBase } from '../../../pages/prepage'

const UserProfile = (props) => {

    const {
        user
    } = props

    const data = [
        'first_name',
        'last_name',
        'email',
        'location',
        'phone_number',
        'background_photo',
        'bio',
        'tags',
        'social',
    ]

    const value = data.reduce((prevValue, item) => {
        return !!user[item] ? prevValue + 1 : prevValue + 0;
    }, 0)

    const Performance = Math.round(value * 100 / data.length)

    return (
        <UserProfileBase
            user={user}
            Performance={Performance}
        />
    )
}

export default connect(({ user }) => ({ user: user.data }), User)(UserProfile)