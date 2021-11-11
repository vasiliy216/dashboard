import { Select } from 'antd'

import './style.scss'

const SelectBasic = () => {

    const { Option } = Select;

    return (
        <div className="device-footer-select">
            <Select defaultValue="Last Week" className="device-select">
                <Option className="device-select-option" value="Last Week">Last Week</Option>
                <Option className="device-select-option" value="Today">Today</Option>
                <Option className="device-select-option" value="Last Month">Last Month</Option>
                <Option className="device-select-option" value="Last Year">Last Year</Option>
            </Select>
        </div>
    )
}

export default SelectBasic