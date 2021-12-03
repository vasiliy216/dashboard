import { Input } from 'antd'
import classNames from 'classnames'
import './style.scss'

const ChangePassword = (props) => {

    const {
        data,
        ChangeData,
        error
    } = props

    return (
        <>
            <div className="form-row mx-24">
                <div className="form-row-title">
                    <h6>Change Password</h6>
                    <p className="text-muted">Change your current password.</p>
                </div>
            </div>
            <div className="form-row mx-24 col-3">
                <div className="form-group">
                    <label htmlFor="OldPassword">Old Password</label>
                    <Input
                        className={classNames({
                            "form-control": true,
                            "error-feedback": error.error_old_password
                        })}
                        id="OldPassword"
                        placeholder="Old Password"
                        type="password"
                        value={data.old_password}
                        onChange={e => ChangeData({ ...data, old_password: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="NewPassword">New Password</label>
                    <Input
                        className={classNames({
                            "form-control": true,
                            "error-feedback": error.error_repeat_password
                        })}
                        id="NewPassword"
                        placeholder="New Password"
                        type="password"
                        value={data.new_password}
                        onChange={e => ChangeData({ ...data, new_password: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="RepeatNewPassword">Repeat New Password</label>
                    <Input
                        className={classNames({
                            "form-control": true,
                            "error-feedback": error.error_repeat_password
                        })}
                        id="RepeatNewPassword"
                        placeholder="Repeat New Password"
                        type="password"
                        value={data.repeat_password}
                        onChange={e => ChangeData({ ...data, repeat_password: e.target.value })}
                    />
                </div>
            </div>
        </>
    )
}

export default ChangePassword