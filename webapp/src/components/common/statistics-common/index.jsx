import { StatisticsBasic } from '../../basic/'

import './style.scss'

const StatisticsCommon = props => {

    const stats = [{
        title: 'posts',
        values: '2,390',
        percentage: '4.7%',
        borderColor: '#aae7f1', 
        backgroundColor: '#eff8fa'
    },{
        title: 'pages',
        values: '182',
        percentage: '12.4%',
        borderColor: '#aae9cb', 
        backgroundColor: '#f1faf6' 
    },{
        title: 'comments',
        values: '8,147',
        percentage: '3.8%',
        borderColor: '#fedd8e', 
        backgroundColor: '#fefaf1'
    },{
        title: 'users',
        values: '2,413',
        percentage: '12.4%',
        borderColor: '#ffbecc', 
        backgroundColor: '#fef4f6' 
    },{
        title: 'subscribers',
        values: '17,281',
        percentage: '2.4%',
        borderColor: '#a5d1ff', 
        backgroundColor: '#f1f8ff'
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