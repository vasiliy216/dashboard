import RegisterForm from '../components/'
import { withFormik } from 'formik'
import Validate from '../../validate/'

import { User } from '../../../redux/actions'
import store from '../../../redux/store'

export default withFormik({
    mapPropsToValues: () => ({ email: '', password: '', passwordRepeat: '' }),
    validate: values => {
        let errors = {};

        Validate({ isRegistration: true, values, errors })

        return errors;
    },

    handleSubmit: (values, { setSubmitting, props }) => {
        const { email, password } = values;

        store
            .dispatch(User.fetchUserRegister({
                email: email,
                password: password
            }))
            .then(data => {
                document.location.pathname = '/account/login'
            })
            .catch(err => {
                console.log(err)
            })
    },
    displayName: "RegisterForm"

})(RegisterForm);