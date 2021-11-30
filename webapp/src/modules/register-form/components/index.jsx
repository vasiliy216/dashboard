import { Form, Input } from 'antd'
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
                            {touched.email && errors.email
                                ? <p className="invalid-feedback">{errors.email}</p>
                                : touched.email && <p className="valid-feedback">The email looks good!</p>
                            }
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
                            {touched.password && errors.password
                                ? <p className="invalid-feedback">{errors.password}</p>
                                : touched.password && <p className="valid-feedback">The password is good!</p>
                            }
                        </Form.Item>
                        <Form.Item
                            validateStatus={ValidateField("passwordRepeat", touched, errors)}
                            className="auth-item"
                        >
                            <label htmlFor="passwordRepeat">Repeat Password</label>
                            <Input
                                id="passwordRepeat"
                                name="passwordRepeat"
                                type="password"
                                className="form-control"
                                placeholder="Repeat Password"
                                value={values.passwordRepeat}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                required
                            />
                            {touched.passwordRepeat && errors.passwordRepeat
                                ? <p className="invalid-feedback">{errors.passwordRepeat}</p>
                                : touched.passwordRepeat && <p className="valid-feedback">Passwords are the same!</p>
                            }
                        </Form.Item>
                        <Form.Item className="auth-item">
                            <Buttons primary onClick={handleSubmit}>Create Account</Buttons>
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
                <Link to="/account/login">Sign In?</Link>
            </div>
        </div>
    )
}

export default LoginForm