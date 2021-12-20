import { useState } from 'react'
// import { connect } from 'react-redux'
import moment from 'moment';
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
        schedule: new Date()
    })

    const ChangeData = value => {
        setData(value)
    }

    const DisabledDate = (current) => {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }

    const ChangeDate = date => {

        const date_d = date ? date._d : new Date()

        setData(prevState => ({ ...prevState, schedule: date_d }))
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
            DisabledDate={DisabledDate}
            ChangeDate={ChangeDate}
        />
    )
}

export default AddNewPost