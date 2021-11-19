import { Buttons, StatsPanelHeader } from '../../basic'
import { Checkbox } from 'antd';

import './style.scss'

const Categories = () => {


    return (
        <div className="categories">
            <div className="card-mrg-all">
                <StatsPanelHeader>Categories</StatsPanelHeader>
                <div className="categories-body card-p-16">
                    <Checkbox defaultChecked className="checkbox-fix">Uncategorized</Checkbox>
                    <Checkbox className="checkbox-fix">Design</Checkbox>
                    <Checkbox className="checkbox-fix">Development</Checkbox>
                    <Checkbox className="checkbox-fix">Business</Checkbox>
                    <Checkbox className="checkbox-fix">Travel</Checkbox>
                    <Checkbox className="checkbox-fix">Technology</Checkbox>
                </div>
            </div>
        </div>
    )
}

export default Categories