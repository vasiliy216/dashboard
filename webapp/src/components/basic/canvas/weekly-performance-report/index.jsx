import React from 'react'
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

const CanvasWeeklyPerformanceReport = () => {
    
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    const data = {
        labels,
        datasets: [
            {
                label: 'Hours',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
                backgroundColor: "#007bff",
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
        }
    };

    return (
        <Bar data={data} options={options} />
    )
}

export default CanvasWeeklyPerformanceReport