import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { User } from '../../../redux/actions'

import { EditUserProfileCommon as EditUserProfileCommonBase} from '../../../components/common'

const EditUserProfileCommon = (props) => {
    
    const {
        user
    } = props
    
    const [data, setData] = useState({
        user_name: user.user_name,
        email: user.email,
        phone_number: user.phone_number,
        avatar: user.avatar,
        background_photo: user.background_photo,
        is_public_email: user.is_public_email,
        location: user.location,
        bio: user.bio,
        tags: user.tags,
        social: user.social
    })

    const [userName, setUserName] = useState({
        first_name: user.user_name.split(" ")[0] || '',
        last_name: user.user_name.split(" ")[1] || ''
    })

    console.log(userName)

    const ChangeData = (value) => {
        setData(value)
    }

    const ChangeUserName = (value) => {
        setUserName(value)
    }

    const SaveChanges = () => {

        console.log(data, userName)
    }

    return (
        <EditUserProfileCommonBase 
            data={data}
            ChangeData={ChangeData}
            userName={userName}
            ChangeUserName={ChangeUserName}
            SaveChanges={SaveChanges}
        />
    )

}

export default connect(({ user }) => ({
    user: user.data
}), User)(EditUserProfileCommon)