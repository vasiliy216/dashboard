import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { User } from '../../../redux/actions'
import { OpenNotification } from '../../../utils/helpers'
import { filesApi } from '../../../utils/api'

import { EditUserProfileCommon as EditUserProfileCommonBase } from '../../../components/common'

const EditUserProfileCommon = (props) => {

    const {
        user,
        fetchUserUpdate
    } = props

    const [data, setData] = useState({
        link: user.link || user._id,
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
        repeat_password: ''
    })

    const [error, setError] = useState({
        error_old_password: false,
        error_repeat_password: false
    })

    const [imgAvatar, setImgAvatar] = useState('')
    const [imgBackground, setImgBackground] = useState('')

    const ChangeData = (value) => {
        setData(value)
    }

    //кастыль
    const ChangeFilesAvatar = async file => {
        await filesApi
            .upload(file[0], 300, 300)
            .then(result => {

                const { file } = result.data

                // console.log(file)
                                
                setImgAvatar(file)
            })
    }

    const ChangeFilesBackground = async file => {
        await filesApi
            .upload(file[0], 800, 300)
            .then(result => {
                const { file } = result.data

                setImgBackground(file);
            })
    }

    const SaveChanges = () => {

        if (data.new_password !== data.repeat_password) {
            setError(prevError => ({
                ...prevError,
                error_repeat_password: true
            }))
            OpenNotification({
                type: 'error',
                text: "Passwords don't match!"
            })
        } else {
            setError(prevError => ({
                error_old_password: false,
                error_repeat_password: false
            }))
            fetchUserUpdate({
                ...data,
                user_name: data.first_name + " " + data.last_name,
                avatar: imgAvatar._id || data.avatar,
                background_photo: imgBackground._id || data.background_photo,
                link: data.link || user._id
            }).then(newData => {
                if (newData.name === "Error") {
                    setError(prevError => ({
                        ...prevError,
                        error_old_password: true,
                    }))
                } else {
                    setData(prevData => ({
                        ...prevData,
                        old_password: '',
                        new_password: '',
                        repeat_password: ''
                    }))
                }
            }).catch(err => {
                // console.log(err)
                // setError(prevError => ({
                //     ...prevError,
                //     error_old_password: true,
                // }))
            })
        }
    }

    return (
        <EditUserProfileCommonBase
            data={data}
            imgAvatar={imgAvatar}
            imgBackground={imgBackground}
            error={error}
            ChangeData={ChangeData}
            SaveChanges={SaveChanges}
            ChangeFilesAvatar={ChangeFilesAvatar}
            ChangeFilesBackground={ChangeFilesBackground}
        />
    )

}

export default connect(({ user }) => ({
    user: user.data
}), User)(EditUserProfileCommon)