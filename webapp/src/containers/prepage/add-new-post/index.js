import { useState } from 'react'
import { connect } from 'react-redux'
import { postApi } from '../../../utils/api'
import { OpenNotification } from '../../../utils/helpers'

import { AddNewPost as AddNewPostBase } from '../../../pages/prepage'

const AddNewPost = (props) => {
    
    const {

    } = props

    const [data, setData] = useState({
        text: "",
        title: "",
        image: "",
        user: "",
        categories: [],
        status: true,
        visibility: true,
        schedule: ""
    })

    return (
        <AddNewPostBase 

        />
    )
}

export default AddNewPost