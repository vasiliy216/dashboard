import React from 'react';
import { Pie } from 'react-chartjs-2';

const CanvasUsersByDevice = (props) => {

    const options = {
        responsive: true,
        animation: true,
        plugins: {
            legend: {
                position: 'bottom',
                color: 'red'
            }
        },
        stacked: false,
        layout: {
            padding: 20
        },
    };

    const data = {
        labels: ['Desktop', 'Table', 'Mobile'],
        datasets: [
            {
                label: '# of Votes',
                data: [68.3, 24.2, 7.5],
                backgroundColor: [
                    '#1988ff',
                    '#7fbdff',
                    '#b2d7ff'
                ],
                width: 100,
                borderColor: '#fff',
                borderWidth: 2,
            },
        ],
    };

    return (
        <Pie data={data} options={options}/>
    )
}

export default CanvasUsersByDevice;