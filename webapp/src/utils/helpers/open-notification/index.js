import { notification } from 'antd';
import classNames from 'classnames'

notification.config({
    top: 60,
})

export default ({ text, type = 'info', title, is_validation = false }) =>
    is_validation
        ? notification[type]({
            title: title,
            description: text,
            duration: 5
        })
        : notification.open({
            message: text,
            className: classNames({
                'is-notification': true,
                'bg-success': type === 'success',
                'bg-danger': type === 'error'
            }),
            duration: 5
        })