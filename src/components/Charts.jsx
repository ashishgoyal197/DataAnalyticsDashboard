import { Component } from "react";
import Chart from "react-apexcharts";

export class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Price: {
        options: {
          chart: {
            id: "area-datetime",
          },
          grid: {
            show: false,
          },
          title: {
            text: "Market Price (USD)",
            style: {
              fontSize: "14px",
              fontWeight: "bold",
              color: this.props.color,
            },
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            type: "datetime",
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            show: false,
          },
          colors: [this.props.color],
          tooltip: {
            y: {
              formatter: (value) => {
                return value.toFixed(2);
              },
            },
            theme: "dark",
          },
          selection: 365,
        },
        series: [
          {
            name: "Market Price",
            data: [[1645837250522, 39804.53519937617]],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div>
        <Chart
          options={this.state.Price.options}
          series={this.props.series}
          type={this.props.type}
          height={this.props.height}
          width={this.props.width}
        />
      </div>
    );
  }
}

export default Charts;
