import { StatisticsBasic } from '../../basic/'

import './style.scss'

const StatisticsCommon = props => {

    const stats = [{
        title: 'posts',
        values: '2,390',
        percentage: '4.7%' 
    },{
        title: 'pages',
        values: '182',
        percentage: '12.4%' 
    },{
        title: 'comments',
        values: '8,147',
        percentage: '3.8%' 
    },{
        title: 'users',
        values: '2,413',
        percentage: '12.4%' 
    },{
        title: 'subscribers',
        values: '17,281',
        percentage: '2.4%' 
    }]
    
    return (
        <div className="statistics">
            {stats.map((item, index) => {
                return (
                    <StatisticsBasic key={index} {...item}/>
                )
            })}
        </div>
    )
}

export default StatisticsCommon