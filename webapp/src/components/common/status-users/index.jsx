import classNames from 'classnames'
import find from 'lodash/find'
import { StatsPanelHeader } from '../../basic'

import './style.scss'

const StatusUsers = props => {
    
    const {
        styleDark,
        users
    } = props

    return (
        <div className="status-users card-p">
            <div className={classNames({
            "card-mrg-all" : true,
            "bg-dark" : styleDark
        })}>
                <StatsPanelHeader>{ props.children }</StatsPanelHeader>
                <div className="status-users-body">
                    <table className="status-users__table">
                        <thead className="status-users__head">
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Country</th>
                                <th>City</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody className="status-users__body">

                            <tr>
                                <th>1</th>
                                <th>Ali</th>
                                <th>Kerry</th>
                                <th>Russian Federation</th>
                                <th>Moskov</th>
                                <th>107-0339</th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <th>Ali</th>
                                <th>Kerry</th>
                                <th>Russian Federation</th>
                                <th>Moskov</th>
                                <th>107-0339</th>
                            </tr>
                            <tr>
                                <th>3</th>
                                <th>Ali</th>
                                <th>Kerry</th>
                                <th>Russian Federation</th>
                                <th>Moskov</th>
                                <th>107-0339</th>
                            </tr>
                            <tr>
                                <th>4</th>
                                <th>Ali</th>
                                <th>Kerry</th>
                                <th>Russian Federation</th>
                                <th>Moskov</th>
                                <th>107-0339</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default StatusUsers