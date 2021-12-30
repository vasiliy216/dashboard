// import { useState } from 'react'
import { Select } from 'antd'

import './style.scss'

const SelectBasic = (props) => {

    const {
        // options
    } = props

    const { Option } = Select;

    // for (let i = 0; i < options.length; i++) {
    //     children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    // }

    // options.forEach((item, index) => {
    //     children.push(<Option key={index} className="device-select-option" value={item}>{item}</Option>)
    // })

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