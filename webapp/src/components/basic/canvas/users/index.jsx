import React from 'react'
import { Line } from 'react-chartjs-2';
import faker from 'faker';

const CanvasUsers = () => {

    const options = {
        responsive: true,
        animation: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        legend: {
            display: true,
            color: '#bdbec3'
        },
        stacked: false,
        elements: {
            point: {
                radius: 0,
                borderWidth: 0,
                hoverRadius: 2,
                hoverBorderWidth: 4,
            },
        },
        scales: {
            yAxes: {
                ticks: {
                    color: '#bdbec3'
                },
                grid: {
                    display: true,
                    drawBorder: true,
                },
            },

            xAxes: {
                ticks: {
                    color: '#bdbec3'
                },
                grid: {
                    display: false,
                    drawBorder: false,
                },
            },
        },
        layout: {
            padding: {
                bottom: 20,
                left: 20,
                right: 20
            }
        },
    };

    const labels = [
        '1',
        '',
        '',
        '',
        '',
        '',
        '7',
        '',
        '',
        '',
        '',
        '',
        '',
        '14',
        '',
        '',
        '',
        '',
        '',
        '',
        '21',
        '',
        '',
        '',
        '',
        '',
        '',
        '28',
        '',
    ];

    const data = {
        labels,
        datasets: [
            {
                label: 'Current Month',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: 'rgb(53, 162, 235)',
                borderWidth: 2,
                tension: .3,
                fill: 'start',
                backgroundColor: 'rgba(53, 162, 235, 0.1)',
            },
            {
                label: 'Past Month',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 300 })),
                borderColor: 'rgb(255, 99, 132)',
                borderDash: [3],
                borderWidth: 1,
                tension: .3,
                fill: 'start',
                backgroundColor: 'rgba(255, 99, 132, 0.1)',
            },
        ],
    };

    return (
        <Line options={options} data={data} />
    )
}

export default CanvasUsers