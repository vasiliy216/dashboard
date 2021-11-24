import React from 'react'
import { Line } from 'react-chartjs-2';
import faker from 'faker';

const CanvasStatisticsComments = props => {

    const labels = [0,1,2,3,4,5,6]

    const data = {
        labels,
        datasets: [
            {
                label: '#',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: props.borderColor,
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 2,
                pointHoverBorderWidth: 4,
                pointBorderWidth: 0,
                pointBackgroundColor: 'rgba(255, 255, 255, 0)',
                tension: .3,
                fill: 'start',
                backgroundColor: props.backgroundColor,
            }
        ],
    }

    const options = {
        responsive: true,
        animation: true,
        plugins: {
            legend: {
                display: false,
            }
        },
        stacked: false,
        scales: {
            yAxes: {
                ticks: {
                    display: false
                },
                grid: {
                    display: false,
                    drawBorder: false,
                },
            },

            xAxes: {
                ticks: {
                    display: false
                },
                grid: {
                    display: false,
                    drawBorder: false,
                },
            },
        },
        layout: {
            padding: {
                top: 30,
                bottom: -50,
                left: -50,
                right: -50
            }
        },
    };

    return (
        <div style={{
            width: '100%',
            height: 'auto',
            position: 'absolute',
            bottom: 0,
            zIndex: 99
        }}>
            <Line data={data} options={options} />
        </div>
    )
}

export default CanvasStatisticsComments