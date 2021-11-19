import { Link } from 'react-router-dom'

import { Buttons, StatsPanelHeader } from '../../basic'

import './style.scss'

const Actions = () => {


    return (
        <div className="actions">
            <div className="card-mrg-all">
                <StatsPanelHeader>Actions</StatsPanelHeader>
                <ul className="actions-body card-p-16">
                    <li className="actions-body-item">
                        <i class="fas fa-flag"></i>
                        <strong> Status: </strong>
                        <p>Draft</p>
                        <Link to="">Edit</Link>
                    </li>
                    <li className="actions-body-item">
                        <i class="fas fa-eye"></i>
                        <strong> Visibility: </strong>
                        <p className="text-success">Public</p>
                        <Link to="">Edit</Link>
                    </li>
                    <li className="actions-body-item">
                        <i class="far fa-calendar"></i>
                        <strong> Schedule: </strong>
                        <p>Now</p>
                        <Link to="">Edit</Link>
                    </li>
                </ul>
                <div className="actions-footer">
                    <Buttons outline primary>
                        <i className="fas fa-save"></i> Save Draft
                    </Buttons>
                    <Buttons primary>
                        <i class="fas fa-copy"></i> Publish
                    </Buttons>
                </div>
            </div>
        </div>
    )
}

export default Actions