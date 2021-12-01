import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { User } from '../../../redux/actions'

import { EditUserProfileCommon as EditUserProfileCommonBase } from '../../../components/common'

const EditUserProfileCommon = (props) => {

    const {
        user,
        fetchUserUpdate
    } = props

    const [data, setData] = useState({
        user_name: user.user_name,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone_number: user.phone_number,
        avatar: user.avatar,
        background_photo: user.background_photo,
        is_public_email: user.is_public_email,
        location: user.location,
        bio: user.bio,
        tags: user.tags,
        social: user.social,
        old_password: '',
        new_password: '',
        reapet_password: ''
    })

    const ChangeData = (value) => {
        setData(value)
    }

    const SaveChanges = () => {
        fetchUserUpdate({
            ...data,
            user_name: data.first_name + " " + data.last_name
        })
    }

    return (
        <EditUserProfileCommonBase
            data={data}
            ChangeData={ChangeData}
            SaveChanges={SaveChanges}
        />
    )

}

export default connect(({ user }) => ({
    user: user.data
}), User)(EditUserProfileCommon)