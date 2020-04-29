import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export class ElevationChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            points: props.trackpoints,
        };
        this.init(this.state.points);
    }

    init(points) {
        let index = 1;
        this.data = {
            labels: points.map((p) => `Point ${index++}`),
            datasets: [
                {
                    label: 'Elevation',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: '#44dba1',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#302c58',
                    pointBackgroundColor: '#302c58',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: '#302c58',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 15,
                    data: points.map((p) => parseInt( p.getElevation(), 10 )),
                }
            ]
        };
        this.lineOptions = {
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
            <Line
                data={this.data}
                options={this.lineOptions}
                height={100}
            />
        );
    }
}

export default ElevationChart;
