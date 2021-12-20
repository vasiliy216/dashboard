import { DatePicker, Select } from 'antd';
import classNames from 'classnames';
import { Buttons, StatsPanelHeader } from '../../basic'

import './style.scss'

const Actions = (props) => {

    const {
        data,
        ChangeData,
        SendData,
        DisabledDate,
        ChangeDate
    } = props

    const { Option } = Select;

    return (
        <div className="actions">
            <div className="card-mrg-all">
                <StatsPanelHeader>Actions</StatsPanelHeader>
                <ul className="actions-body card-p-16">
                    <li className="actions-body-item">
                        <i className="fas fa-flag"></i>
                        <strong> Status: </strong>
                        <p>Post</p>
                    </li>
                    <li className="actions-body-item">
                        <i className="fas fa-eye"></i>
                        <strong> Visibility: </strong>
                        {/* <p className="text-success">Public</p> */}
                        <Select
                            id="visibility"
                            size="small"
                            bordered={false}
                            suffixIcon={false}
                            value={data.visibility}
                            onChange={e => ChangeData({ ...data, visibility: e })}
                            dropdownMatchSelectWidth={false}
                            className={classNames({
                                "text-success": data.visibility,
                                "text-danger": !data.visibility
                            })}
                            style={{fontSize: "15px"}}
                        >
                            <Option value={true}>Public</Option>
                            <Option value={false}>Private</Option>
                        </Select>
                        <label htmlFor="visibility">Edit</label>
                    </li>
                    <li className="actions-body-item">
                        <i className="far fa-calendar"></i>
                        <strong> Schedule: </strong>
                        <DatePicker
                            size="small"
                            format="DD-MM-YYYY"
                            placeholder="Now"
                            bordered={false}
                            suffixIcon={false}
                            onChange={ChangeDate}
                            disabledDate={DisabledDate}
                            id="date"
                        />
                        <label htmlFor="date">Edit</label>
                    </li>
                </ul>
                <div className="actions-footer">
                    <Buttons outline primary>
                        <i className="fas fa-save"></i> Save Post
                    </Buttons>
                    <Buttons primary onClick={SendData}>
                        <i className="fas fa-copy"></i> Publish
                    </Buttons>
                </div>
            </div>
        </div>
    )
}

export default Actions