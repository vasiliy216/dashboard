import { Form, Input } from 'antd'
import { Buttons } from '../../../components/basic'
import { Link } from 'react-router-dom'
import '../../style.scss'

const LoginForm = props => {

    const {
        handleSubmit
    } = props

    return (
        <div>
            <div className="auth-form card-mrg-all">
                <div className="auth-form__body">
                    <i className="fas fa-clipboard-list logo"></i>
                    <h5 className="auth-form-title">Create New Account</h5>
                    <Form onSubmit={handleSubmit}>
                        <Form.Item className="auth-item">
                            <label htmlFor="inputEmailAddress">Email address</label>
                            <Input
                                id="inputEmailAddress"
                                className="form-control"
                                placeholder="Enter email"
                            />
                        </Form.Item>
                        <Form.Item className="auth-item">
                            <label htmlFor="inputPassword">Password</label>
                            <Input
                                id="inputPassword"
                                className="form-control"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item className="auth-item">
                            <label htmlFor="inputRepeatPassword">Repeat Password</label>
                            <Input
                                id="inputRepeatPassword"
                                className="form-control"
                                placeholder="Repeat Password"
                            />
                        </Form.Item>
                        <Form.Item className="auth-item">
                            <Buttons primary>Create Account</Buttons>
                        </Form.Item>
                    </Form>
                </div>
                <div className="auth-form__footer">
                    <ul className="auth-form__footer__icons">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-github"></i></a></li>
                        <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="login-form__meta">
                <Link to="">Forgot your password?</Link>
                <Link to="/auth/login">Sign In?</Link>
            </div>
        </div>
    )
}

export default LoginForm