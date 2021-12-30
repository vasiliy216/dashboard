import { Input } from 'antd'
import './style.scss'

const PageAddress = (props) => {

    const {
        data,
        ChangeData
    } = props

    const location = window.location.origin + '/'

    return (
        <>
            <div className="form-row mx-24">
                <div className="form-row-title">
                    <h6>Page Address</h6>
                    <p className="text-muted">Here you can change your page address.</p>
                </div>
            </div>
            <div className="form-row mx-24 col-3">
                <div className="form-group w-100 flex-100">
                    <Input
                        className="form-control"
                        prefix={location}
                        value={data.link}
                        onChange={e => ChangeData({ ...data, link: e.target.value })}
                    />
                </div>
            </div>
        </>
    )
}

export default PageAddress