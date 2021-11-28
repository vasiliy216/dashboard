import LoginForm from '../components/'
import { withFormik } from 'formik'
import Validate from '../../validate/'

import { User } from '../../../redux/actions'
import store from '../../../redux/store'


export default withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),
    validate: values => {
        let errors = {};

        Validate({ isRegistration: false, values, errors })

        return errors;
    },

    handleSubmit: (values, { setSubmitting, props }) => {

        const { email, password } = values;

        store
            .dispatch(User.fetchUserLogin({
                email: email,
                password: password
            }))
            .then(({ status }) => {
                if (status === "success") {
                    document.location.pathname = '/';
                }
            })
            .catch(() => {

            })
    },
    displayName: "LoginForm"

})(LoginForm);