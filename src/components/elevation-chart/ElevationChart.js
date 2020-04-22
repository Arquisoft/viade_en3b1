import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export class ElevationChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            points: props.trackpoints,
        };
        // console.log(props.trackpoints);
        this.init(this.state.points)
    }

    init(points) {
        console.log(points[0].getElevation());
        let index = 1;
        this.data = {
            labels: points.map((p) => `Trackpoint ${index++}`),
            datasets: [
                {
                    label: 'Elevation',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 15,
                    data: points.map((p) => p.getElevation()),
                }
            ]
        };
        this.lineOptions = {
            // scales: {
            //     xAxes: [{
            //         gridLines: {
            //             display: true,
            //         },
            //     }],
            //     yAxes: [{
            //         // stacked: true,
            //         gridLines: {
            //             display: true,
            //         },
            //         ticks: {
            //             beginAtZero: true,

            //         },
            //     }],
            // },
            legend: {
                display: false,
            },
            tooltips: {
                enabled: true,
            },
        };
    }

    render() {
        return (
            <div style={this.props.style}>
                <Line
                    data={this.data}
                    options={this.lineOptions}
                />
            </div>
        )
    }
}

export default ElevationChart
