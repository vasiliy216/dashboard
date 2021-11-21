import { Route, Routes } from 'react-router-dom'

import { LoginForm, RegisterForm } from '../../modules'

import './style.scss'

const Auth = () => {

    return (
        <div className="row-auth">
            <Routes>
                {/* <Route path="/" element={<RegisterForm />}> */}
                    <Route index element={<RegisterForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                {/* </Route> */}
            </Routes>
        </div>
    )
}

export default Auth