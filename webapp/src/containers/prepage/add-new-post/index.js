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
        categories: [],
        status: true,
        visibility: true,
        // schedule: ""
    })

    const ChangeData = (value) => {
        setData(value)
    }

    const SendData = () => {
        postApi
            .create(data)
            .then(newData => {
                
                const { data } = newData;

                OpenNotification({
                    type: data.status,
                    text: data.message
                })
                
                setData(prevData => ({
                    ...prevData,
                    categories: [],
                    schedule: "",
                    text: "",
                    title: "",
                    image: ""
                }))

            })
            .catch(error => {
                OpenNotification({
                    type: error.status,
                    text: error.message
                })
            })
    }

    return (
        <AddNewPostBase
            data={data}
            ChangeData={ChangeData}
            SendData={SendData}
        />
    )
}

export default AddNewPost