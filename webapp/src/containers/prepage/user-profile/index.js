import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { User } from '../../../redux/actions'
import { useNavigate } from 'react-router-dom'
import { userApi } from '../../../utils/api'

import { UserProfile as UserProfileBase } from '../../../pages/prepage'

const UserProfile = (props) => {

    const {
        user
    } = props

    const [item, setItem] = useState([])
    const [isLoader, setIsLoader] = useState(true)

    const navigate = useNavigate();

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

    const curretnUserId = window.location.pathname.slice(1)

    //переделать
    useEffect(() => {
        setIsLoader(true)

        if (curretnUserId !== user._id) {
            userApi
                .getUser(curretnUserId)
                .then(({ data }) => {
                    setItem(prevState => data)      
                    
                    setIsLoader(prevState => (!prevState))
                })
        } else {
            setItem(user)
            setIsLoader(prevState => (!prevState))
        }
    }, [navigate])

    const value = data.reduce((prevValue, currentItem) => {
        return !!item[currentItem] ? prevValue + 1 : prevValue + 0;
    }, 0)

    const Performance = Math.round(value * 100 / data.length)

    return (
        <UserProfileBase
            item={item}
            user={user}
            Performance={Performance}
            isLoader={isLoader}
        />
    )
}

export default connect(({ user }) => ({ user: user.data }), User)(UserProfile)