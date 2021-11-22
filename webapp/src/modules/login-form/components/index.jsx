import { Form, Input, Checkbox } from 'antd'
import { Buttons } from '../../../components/basic'
import { Link } from 'react-router-dom'
import { ValidateField } from '../../../utils/helpers'
import '../../style.scss'

const LoginForm = props => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
    } = props

    return (
        <div>
            <div className="auth-form card-mrg-all">
                <div className="auth-form__body">
                    <i className="fas fa-clipboard-list logo"></i>
                    <h5 className="auth-form-title">Create New Account</h5>
                    <Form onSubmit={handleSubmit}>
                        <Form.Item
                            validateStatus={ValidateField("email", touched, errors)}
                            className="auth-item"
                        >
                            <label htmlFor="email">Email address</label>
                            <Input
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                required
                            />
                            {touched.email && errors.email && <p className="invalid-feedback">{errors.email}</p>}
                        </Form.Item>
                        <Form.Item
                            validateStatus={ValidateField("password", touched, errors)}
                            className="auth-item"
                        >
                            <label htmlFor="password">Password</label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={values.password}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                required
                            />
                            {touched.password && errors.password && <p className="invalid-feedback">{errors.password}</p>}
                        </Form.Item>
                        <Form.Item className="auth-item">
                            <Checkbox className="checkbox-fix">Remember me for 30 days.</Checkbox>
                        </Form.Item>
                        <Form.Item className="auth-item">
                            <Buttons primary onClick={handleSubmit}>Access Account</Buttons>
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
                <Link to="/auth/register">Create new account?</Link>
            </div>
        </div>
    )
}

export default LoginForm