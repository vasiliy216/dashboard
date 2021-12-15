import { useState, useEffect } from 'react'
import { Tables as TablesBase } from '../../../pages/prepage'
import { userApi } from '../../../utils/api'

const Tables = () => {
    
    const [users, setUsers] = useState([])
    const [isLoader, setIsLoader] = useState(true)

    const fetchUsers = () => {
        userApi
            .getUsers()
            .then(r => {
                const { data } = r;
                
                setUsers(prevState => data)

                setIsLoader(prevState => (!prevState))
            })
            .catch()
    }

    useEffect(() => {
        fetchUsers()
    },[])

    return (
        <TablesBase 
            users={users}
            isLoader={isLoader}
        />
    )
}

export default Tables