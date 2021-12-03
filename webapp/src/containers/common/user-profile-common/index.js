import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { User } from '../../../redux/actions'
import { OpenNotification } from '../../../utils/helpers'

import { UserProfileCommon as UserProfileCommonBase } from '../../../components/common'

const UserProfileCommon = (props) => {

    const {
        user
    } = props

    return (
        <UserProfileCommonBase

        />
    )
}

export default connect(({ user }) => ({ user: user.data }), User)(UserProfileCommon)