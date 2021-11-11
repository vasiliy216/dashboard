import { StatsPanelHeader, SelectBasic, FullReport, TopRefferalsItem } from '../../basic'

import './style.scss'

const TopReferrals = () => {
    
    const items = [{
        name: "GitHub",
        value: "19,291"
    },{
        name: "GitHub",
        value: "19,291"
    },{
        name: "Stack Overflow",
        value: "11,201"
    },{
        name: "Hacker News",
        value: "9,291"
    },{
        name: "Reddit",
        value: "8,281"
    },{
        name: "The Next Web",
        value: "7,128"
    },{
        name: "Tech Crunch",
        value: "6,218"
    },{
        name: "YouTube",
        value: "1,218"
    },{
        name: "Adobe",
        value: "827"
    }]

    return (
        <div className="top-refferals card-p">
            <div className="card-mrg-all">
                <StatsPanelHeader>Top Referrals</StatsPanelHeader>
                <div className="top-refferals-body">
                    <ul className="top-refferals-list">
                        {items.map((item, index) => {
                            return (
                                <TopRefferalsItem {...item} key={index}/>
                            )
                        })}
                    </ul>
                </div>
                <div className="top-refferals-footer card-footer card-p-16">
                    <SelectBasic />
                    <FullReport>Full report →</FullReport>
                </div>
            </div>
        </div>
    )
}

export default TopReferrals