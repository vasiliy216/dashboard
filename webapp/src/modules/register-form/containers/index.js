import RegisterForm from '../components/'
import { withFormik } from 'formik'
import Validate from '../../validate/'

export default withFormik({
    mapPropsToValues: () => ({ email: '', password: '', passwordRepeat: '' }),
    validate: values => {
        let errors = {};

        Validate({ isRegistration: true, values, errors })

        return errors;
    },

    handleSubmit: (values, { setSubmitting, props }) => {
        console.log(values)
    },
    displayName: "RegisterForm"

})(RegisterForm);