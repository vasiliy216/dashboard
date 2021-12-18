import { StatsPanelHeader } from '../../basic'
import { Checkbox } from 'antd';

import './style.scss'

const Categories = (props) => {

    const {
        data,
        ChangeData
    } = props

    return (
        <div className="categories">
            <div className="card-mrg-all">
                <StatsPanelHeader>Categories</StatsPanelHeader>
                <div className="categories-body card-p-16">
                    <Checkbox.Group onChange={CheckboxValue => ChangeData({...data, categories: CheckboxValue})}>
                        <Checkbox value="Design" className="checkbox-fix">Design</Checkbox>
                        <Checkbox value="Development" className="checkbox-fix">Development</Checkbox>
                        <Checkbox value="Business" className="checkbox-fix">Business</Checkbox>
                        <Checkbox value="Travel" className="checkbox-fix">Travel</Checkbox>
                        <Checkbox value="Technology" className="checkbox-fix">Technology</Checkbox>
                    </Checkbox.Group>
                </div>
            </div>
        </div>
    )
}

export default Categories