import { useState } from 'react'
import classNames from 'classnames'
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
                            {
                                users
                                .filter(i => i.is_online === !styleDark)
                                .map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <th>{ index + 1 }</th>
                                            <th>{ data.first_name || '-' }</th>
                                            <th>{ data.last_name || '-' }</th>
                                            <th>Belorus</th>
                                            <th>Brest</th>
                                            <th>{ data.phone_number || '-' }</th>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default StatusUsers