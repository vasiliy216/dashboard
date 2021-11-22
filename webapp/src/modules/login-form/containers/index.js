import LoginForm from '../components/'
import { withFormik } from 'formik'
import Validate from '../../validate/'

export default withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),
    validate: values => {
        let errors = {};

        Validate({ isRegistration: false, values, errors })

        return errors;
    },

    handleSubmit: (values, { setSubmitting, props }) => {
        console.log(values)
    },
    displayName: "LoginForm"

})(LoginForm);