import { Input } from 'antd'
import './style.scss'

const General = () => {

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
                    <Input id="OldPassword" className="form-control" placeholder="Old Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="NewPassword">New Password</label>
                    <Input id="NewPassword" className="form-control" placeholder="New Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="RepeatNewPassword">Repeat New Password</label>
                    <Input id="RepeatNewPassword" className="form-control" placeholder="Repeat New Password" />
                </div>
            </div>
        </>
    )
}

export default General