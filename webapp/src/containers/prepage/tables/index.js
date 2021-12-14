import { useState, useEffect } from 'react'
import { Tables as TablesBase } from '../../../pages/prepage'
import { userApi } from '../../../utils/api'

const Tables = () => {
    
    const [users, setUsers] = useState('')

    const fetchUsers = () => {
        userApi
            .getUsers()
            .then(data => {
                setUsers(data)
            })
            .catch()
    }

    useEffect(() => {
        fetchUsers()
    },[])

    return (
        <TablesBase 
            users={users}
        />
    )
}

export default Tables